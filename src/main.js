import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';

const searchForm = document.getElementById('search-form');
const loadMoreBtn = document.querySelector('.load-more');

let currentPage = 1;
let currentQuery = '';
let totalHits = 0;

hideLoadMoreButton();

searchForm.addEventListener('submit', async event => {
  event.preventDefault();
  const form = event.currentTarget;
  const query = form.elements.searchText.value.trim();

  if (query === '') {
    iziToast.error({
      title: 'Error',
      message: 'Search query cannot be empty!',
    });
    return;
  }

  currentQuery = query;
  currentPage = 1;
  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);
    totalHits = data.totalHits;

    if (data.hits.length === 0) {
      iziToast.info({
        title: 'Info',
        message:
          'Sorry, there are no images matching your search query. Please try again.',
      });
    } else {
      createGallery(data.hits);
      if (data.hits.length < totalHits) {
        showLoadMoreButton();
      }
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: `Something went wrong: ${error.message}`,
    });
  } finally {
    hideLoader();
  }
});

loadMoreBtn.addEventListener('click', async () => {
  currentPage += 1;
  showLoader();
  hideLoadMoreButton();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);
    createGallery(data.hits);

    const galleryItem = document.querySelector('.gallery-item');
    if (galleryItem) {
      const cardHeight = galleryItem.getBoundingClientRect().height;
      window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
      });
    }

    const loadedImages = (currentPage - 1) * 15 + data.hits.length;
    if (loadedImages >= totalHits) {
      iziToast.info({
        title: 'Info',
        message: "We're sorry, but you've reached the end of search results.",
      });
    } else {
      showLoadMoreButton();
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: `Something went wrong: ${error.message}`,
    });
  } finally {
    hideLoader();
  }
});