import * as basicLightbox from 'basiclightbox';
import '../../node_modules/basiclightbox/src/styles/main.scss';
import { loadedStoredData } from './movieLocalStorage';
import { removeFromList, addToList } from './my-library-btn';
import ImageApiService from './mdApiService';
import { getGenders } from './getGenresbyId';

const imageApiService = new ImageApiService();

let watchedIds = [];
let queueIds = [];

export function getSelectedMovie(movieContainer, results) {
  const { watchedMoviesIds, queueMoviesIds } = loadedStoredData();

  if (watchedMoviesIds) watchedIds = watchedMoviesIds;
  if (queueMoviesIds) queueIds = queueMoviesIds;

  function handeMovieClick({ target }) {
    const liElem = target.closest('.hero-item');

    if (!liElem) {
      return;
    }
    const { id } = liElem.dataset;
    const selectedMovie = results.find(result => result.id === Number(id));
    renderModal(selectedMovie);
  }

  // movieContainer.removeEventListener('click', handeMovieClick);
  movieContainer.addEventListener('click', handeMovieClick);
}

function isWatchedMovie(id) {
  return watchedIds.find(currId => currId === id);
}

function isQueueMovie(id) {
  return queueIds.find(currId => currId === id);
}

export function renderModal(movieEl) {
  const {
    poster_path,
    overview,
    genre_ids,
    id,
    original_title,
    title,
    popularity,
    vote_count,
    vote_average,
  } = movieEl;

  console.log(movieEl);

  const isWatched = isWatchedMovie(id);
  const isQueued = isQueueMovie(id);
  const buttonText = isWatched ? 'Remove from watched' : 'Add to watched';
  const queueBthText = isQueued ? 'Remove from queue' : 'Add to queue';
  const movieGenderesList = getGenders(genre_ids).join(', ');

  let modalRenderHTML = basicLightbox.create(
    `
        <div class="modal-main modal-container">
           <div class="btn-id">
           <button data-id='${id}' class="btn-youtube">
              <div class="overlay-btn-youtube-text" data-id='${id}'>
                 <h2 class="btn-youtube-text" data-id='${id}'>Movie Trailer</h2>
              </div>
           </button>
           </div>  
         <button type="button" class="modal-main__btn-close">
           <svg width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg" style="position: absolute"><path d="m8 8 14 14M8 22 22 8" stroke="#000" stroke-width="2"/></svg>
           </button>
                 <div class="modal-main__modal-card">
                 <picture>
                 <source media="(min-width: 1280px)" srcset="
                              https://image.tmdb.org/t/p/w342${poster_path} 1x,
                              https://image.tmdb.org/t/p/w780${poster_path} 2x,
                              https://image.tmdb.org/t/p/original${poster_path} 3x
                           " type="image/jpg" />
                  <source media="(min-width: 768px)" srcset="
                              https://image.tmdb.org/t/p/w342${poster_path} 1x,
                              https://image.tmdb.org/t/p/w500${poster_path} 2x,
                              https://image.tmdb.org/t/p/original${poster_path} 3x
                           " type="image/jpg" />
                  <source media="(max-width: 767px)" srcset="
                              https://image.tmdb.org/t/p/w342${poster_path} 1x,
                              https://image.tmdb.org/t/p/w500${poster_path} 2x,
                              https://image.tmdb.org/t/p/w780${poster_path} 3x
                           " type="image/jpg" />
                  <img class="modal-main__modal-img" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title} poster" loading="lazy" />
                 </picture>
            <div class="modal-main__about-movie about-movie">
                <h2 class="about-movie__title">${title}</h2>
                <p class="about-movie__title--movie">Vote / Votes <span class="about-movie__about--rating" data-digits-counter>${vote_average}</span><span
                        class="about-movie__slech"> / </span> <span
                        class="about-movie__text--black" data-digits-counter>${vote_count}</span>
                        </p>
                <p class="about-movie__title--movie">Popularity<span
                        class="modal__about--text--popularity" data-digits-counter>${popularity}</span>
                <p class="about-movie__title--movie">Original Title<span class="modal__about--text--original--title">A
                        ${original_title}</span>
                <p class="about-movie__title--movie">Genre<span class="modal__about--text--genre">${movieGenderesList}</span>
                </p>
                </p>
                <p class="about__movie--text">About</p>
                <p class="about__movie--text--content">${overview}</p>
                <ul class="list__btn--add">
                    <li class="watched-item"><button class="add__watched" data-id="${id}" type="button">${buttonText}</button></li>
                    <li class="queue-item"><button class="add__queue" data-id="${id}" type="button">${queueBthText}</button></li>
                </ul>
             </div>
          </div>
        </div>  
      </div>
      `,
    {
      onShow: modalRenderHTML => {
        modalRenderHTML
          .element()
          .querySelector('.modal-main__btn-close').onclick =
          modalRenderHTML.close;

        document.onkeydown = function (evt) {
          evt = evt || window.event;
          let isEscape = false;
          if ('key' in evt) {
            isEscape = evt.key === 'Escape' || evt.key === 'Esc';
          } else {
            isEscape = evt.key === 27;
          }
          if (isEscape) {
            modalRenderHTML.close();
          }
        };
      },
    }
  );
  modalRenderHTML.show();
  document.querySelector('.add__watched').addEventListener('click', event => {
    console.log('clicked');
    if (isWatchedMovie(id)) {
      watchedIds = watchedIds.filter(watchedId => watchedId != id);
      event.target.textContent = 'add to watched';
      localStorage.setItem('watched', JSON.stringify(watchedIds));

      removeFromList(id);
    } else {
      watchedIds.push(id);
      event.target.textContent = 'remove from watched';
      localStorage.setItem('watched', JSON.stringify(watchedIds));

      addToList(id);
    }
  });

  document.querySelector('.add__queue').addEventListener('click', event => {
    if (isQueueMovie(id)) {
      queueIds = queueIds.filter(queuedId => queuedId != id);
      event.target.textContent = 'add to queue';

      localStorage.setItem('queue', JSON.stringify(queueIds));

      removeFromList(id);
    } else {
      queueIds.push(id);
      event.target.textContent = 'remove from queue';

      localStorage.setItem('queue', JSON.stringify(queueIds));

      localStorage.setItem('queue', JSON.stringify(queueIds));

      addToList(id);
    }
  });
  const trailerBtnForModal = document.querySelectorAll('.btn-youtube');
  console.log(trailerBtnForModal);

  trailerBtnForModal.forEach(el =>
    el.addEventListener('click', e => {
      drawModal(e.target.dataset.id);
    })
  );
}
function drawModal(id) {
  imageApiService
    .fetchVideo(id)
    .then(data => {
      const id = data.results[0].key;
      const instance = basicLightbox.create(`
  <iframe class="responsive" width="560" height="315" src='https://www.youtube.com/embed/${id}'frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  `);

      instance.show();
      modalClBtTrailer(instance);
      return instance;
    })
    .catch(() => {
      const instance = basicLightbox.create(`
    <iframe class="responsive" width="560" height="315" src='http://www.youtube.com/embed/zwBpUdZ0lrQ' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      `);

      instance.show();
      modalClBtTrailer(instance);
    });
}
function modalClBtTrailer(instance) {
  const modalBox = document.querySelector('.basicLightbox--iframe');
  modalBox.insertAdjacentHTML(
    'afterbegin',
    `<button
          type="button"
          class="lightbox__button"
          data-action="close-lightbox"
          ></button>
      `
  );
  const modalCloseBtn = document.querySelector(
    '[data-action="close-lightbox"]'
  );
  modalCloseBtn.addEventListener('click', () => instance.close());
}
