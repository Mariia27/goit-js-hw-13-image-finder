
const KEY = '20827583-1f7c3553a3c0826f0532a84e0';
const BASE_URL = 'https://pixabay.com/api/?';
export default {
    search: '',
    page: '1',

    async fatchImages() {
      const url = `${BASE_URL}image_type=photo&orientation=horizontal&q=${this.search}&per_page=12&key=${KEY}`;
      const res = await fetch(url);
      const user = await res.json();
      this.incrementPage();
        return user.hits;
    },
    incrementPage() {
        this.page += 1;
    },
    resetPage() {
        this.page = 1;
    },
    get searchQuerry() {
    return this.search;
  },
  set searchQuerry(querry) {
    this.search = querry;
  },
};
