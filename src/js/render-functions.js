import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more');

const lightbox = new SimpleLightbox('.gallery a');

export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
      
      <li class="gallery-item">
        <a href="${largeImageURL}">
          <img src="${webformatURL}" alt="${tags}" loading="lazy" />
        </a>
      
      
        <div class="info">
          <ul class="info-list">
            <li class="info-item">
              <h4 class="title-info-item">Likes</h4>
              <p class="info-item-value">${likes}</p>
            </li>
            <li class="info-item">
              <h4 class="title-info-item">Views</h4>
              <p class="info-item-value">${views}</p>
            </li>
            <li class="info-item">
              <h4 class="title-info-item">Comments</h4>
              <p class="info-item-value">${comments}</p>
            </li>
            <li class="info-item">
              <h4 class="title-info-item">Downloads</h4>
              <p class="info-item-value">${downloads}</p>
            </li>
          </ul>
        </div>
      </li>`

    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.add('visible');
}

export function hideLoader() {
  loader.classList.remove('visible');
}

export function showLoadMoreButton() {
  loadMoreBtn.classList.add('visible');
}

export function hideLoadMoreButton() {
  loadMoreBtn.classList.remove('visible');
}