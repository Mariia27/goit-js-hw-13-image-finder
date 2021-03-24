import apiService from './apiService';
import imageCard from '../templates/image-card.hbs';
import refs from './refs';
refs.searchForm.addEventListener('submit', imageSearch);
refs.loadBtn.addEventListener('click', loadMore);

function imageSearch(evt) {

  evt.preventDefault();

  const formEl = evt.currentTarget;
  const inputEl = formEl.elements.query;

  clearListItems();

  apiService.resetPage();
  apiService.searchQuerry = inputEl.value;

  apiService.fetcArticles().then(hits => {
    const markup = createListOfTemplate(hits);
    createListOfItems(markup);
  });
  inputEl.value = '';
}

function loadMore() {
  apiService.fetcArticles().then(hits => {
    const markup = createListOfTemplate(hits);
    createListOfItems(markup);
    window.scrollTo(0, 1000);

    window.scrollTo({
      top: 1000,
      behavior: 'smooth',
    });
  });
}
function createListOfItems(items) {
  refs.gallery.insertAdjacentHTML('beforeend', items);
}
function createListOfTemplate(items) {
  return imageCard(items);
}
function clearListItems() {
  refs.gallery.innerHTML = '';
}