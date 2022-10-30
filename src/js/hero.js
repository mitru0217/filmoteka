import ImageApiService from './mdApiService';
import GenresApiService from './genresApi';
import { getSelectedMovie } from './modalMovieMarkup';

const STORAGE_KEY_GENRES = `genres`;
const STORAGE_KEY_RESULTS = `results`;
let photosContainer = document.querySelector('.js-photos-container');
let merged = {};
const form = document.querySelector('.js-search-form');
const searchBtn = document.querySelector('.js-search-btn');
const imageApiService = new ImageApiService();
// form.addEventListener('submit', onSearch);
// const markup = renderMarkupCard(results);



// render();

// export default function render() {
//   // warningField.textContent = ``;
//   // searchResField.textContent = ``;
//   // imageApiService.page = 1;
//   imageApiService
//     .fetchImages()
//     .then(({ results }) => {
//       getSelectedMovie(photosContainer, results)


//       const markup = renderMarkupCard(results);
// // console.log(markup);
//       photosContainer.insertAdjacentHTML('beforeend', markup);
//       // return results;
//     })
//     .catch(err => {
//       console.log('error in function render');
//     });
// }

// function onSearch(e) {
//   e.preventDefault();

//   imageApiService.query = e.currentTarget.elements.query;


//   imageApiService.fetchImages().then(({ results }) => {
//     localStorage.setItem(STORAGE_KEY_RESULTS, JSON.stringify({ results }));
//     console.log(results);
//     const markup = renderMarkupCard(results);

// imageApiService.fetchImages().then(({ results }) => {
//   localStorage.setItem(STORAGE_KEY_RESULTS, JSON.stringify({ results }));
//   const markup = renderMarkupCard(results);


  //     photosContainer.insertAdjacentHTML('beforeend', markup);
  //     // return results;
  //   });

  // genresApiService.fetchGenres().then(({ genres }) => {
  //   localStorage.setItem(STORAGE_KEY_GENRES, JSON.stringify({ genres }));
  //   // return genres;
  // });
  // const markup = renderMarkupCard(merged);
  // console.log(markup);
  // // renderMarkupCard();
  // }

  // function addGenresToResults() {
  //   const savedResults = JSON.parse(localStorage.getItem(STORAGE_KEY_RESULTS));
  //   const savedGenres = JSON.parse(localStorage.getItem(STORAGE_KEY_GENRES));
  //   console.log(savedGenres);
  //   console.log(savedResults);

  //   let merged = { ...savedResults, ...savedGenres };

  //   console.log(merged);
  //   // return merged;
  // }

  export default function renderMarkupCard(results) {
    imageApiService.fetchImages();

    return results
      .map(({ poster_path, title, original_title, release_date, id }) =>
      // genres: [{ name }],
      {
        return ` <li class="hero-item" data-id="${id}">
    <div class="hero-thumb">
    <img
     src="https://image.tmdb.org/t/p/w500/${poster_path}"
    alt="${title}" loading="lazy" class="img-item" />
    </div>
    <div class="hero-info">
      <p class="film-title">${original_title}</p>
       <p class="film-info">${name}|</p>
      <p class="film-info">${release_date}</p>
    </div>
   </li>`;
      }
      )
      .join('');
  }

// function renderMarkupCard(merged) {
//   // addGenresToResults();

//   return merged
//     .map(
//       ({
//         results: { poster_path, title, original_title, release_date },
//         genres: { name },
//       }) => {
//         return ` <li class="hero-item">
//     <div class="hero-thumb">
//     <img
//      src="${poster_path}"
//     alt="${title}" loading="lazy" class="img-item" />
//     </div>
//     <div class="hero-info">
//       <p class="film-title">${original_title}</p>
//       <p class="film-info">${name}|</p>
//       <p class="film-info">${release_date}</p>
//     </div>
//    </li>`;
//       }
//     )
//     .join('');

//   photosContainer.insertAdjacentHTML('beforeend', markup);
// }
