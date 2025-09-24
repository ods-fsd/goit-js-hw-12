import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

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

  galleryContainer.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  galleryContainer.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove('hidden');
}

export function hideLoader() {
  loader.classList.add('hidden');
}