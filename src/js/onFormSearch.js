import ImageApiService from './mdApiService';
import { refs } from './refs';
import renderMarkupCard from './hero';

let photosContainer = refs.photosContainer;
const imageApiService = new ImageApiService();
refs.form.addEventListener('submit', onSearch);

async function onSearch(e) {
  e.preventDefault();
  const searchQuery = e.currentTarget.searchQuery;
  const query = searchQuery.value.trim().toLowerCase();
  if (!query) {
    return;
  }
  imageApiService.query = query;
  clearPage();
  try {
    const { results } = await imageApiService.fetchImagesByQuery();
    const markup = renderMarkupCard(results);
    photosContainer.insertAdjacentHTML('beforeend', markup);
    return results;
  } catch (error) {}
}

function clearPage() {
  imageApiService.resetPage();
  photosContainer.innerHTML = '';
}