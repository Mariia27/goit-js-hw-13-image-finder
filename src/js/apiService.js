
const KEY = 'key=20827583-1f7c3553a3c0826f0532a84e0';
const BASE_URL = 'https://pixabay.com/api/?';
export default {
    search = '',
    page = '1',

    async fatchImages() {
        const url = `${BASE_URL}image_type=photo&orientation=horizontal&q=${this.search}&page=${this.per_page}&per_page=12&key=${KEY}`
        return (await (await fatch(url)).then(res => res.json())).hits;
        
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
