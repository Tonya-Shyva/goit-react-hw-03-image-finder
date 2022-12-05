import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '30150514-c6c2592e7290a81c416aa6291';

export async function getImagesApi(searchValue, pageNumber) {
  const response = await axios.get(
    `/?key=${API_KEY}&q=${searchValue}&orientation=horizontal&safesearch=true&image_type=photo&per_page=12&page=${pageNumber}`
  );
  return response.data.hits;
}
