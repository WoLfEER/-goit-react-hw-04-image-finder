import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
export const resultsQuantity = 12;
const API_KEY = '14498242-ce1d690e276d857725a7a7b28'

export const getImages = async (seqrchQuery, page) => {
  const response = await axios.get(
    `?q=${seqrchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${resultsQuantity}`
  );
  return response.data;
};