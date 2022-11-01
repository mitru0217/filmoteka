import createPagination from './pagination';
import ImageApiService from './mdApiService';
import renderMarkupCard from './hero';
import { refs } from './refs';

if (refs.isLibraryPage) {
  return;
}


const moviesList = new ImageApiService();
moviesList.fetchGenres();

window.addEventListener('load', renderPagination);
localPagination();

async function renderPagination() {
  try {
    rednerCard();

    const pagination = createPagination();
    console.log(pagination);
    pagination.on('afterMove', event => {
      const currentPage = event.page;

      localStorage.setItem('pagination', currentPage);

moviesList.page = currentPage;
      rednerCard(currentPage);
    });
  } catch (error) {}
}

async function rednerCard() {
  clearPage();
  try {
    const { results } = await moviesList.fetchImages();
    const markup = renderMarkupCard(results);
    refs.photosContainer.insertAdjacentHTML('beforeend', markup);
  } catch (error) {
    console.log(error);
  }
}

function clearPage() {
  refs.photosContainer.innerHTML = '';
}

function localPagination() {
  const savePagination = localStorage.getItem('pagination');
  console.log('savePagination :>> ', savePagination);
  if (savePagination) {
    moviesList.page = savePagination;
    const pagination = createPagination();
    pagination.movePageTo(savePagination);
  }
}
