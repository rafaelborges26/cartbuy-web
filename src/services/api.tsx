import axios from 'axios';

console.log(process.env.REACT_APP_API_URL);

const api = axios.create({
  baseURL: 'https://5d6da1df777f670014036125.mockapi.io/api/v1/product',
});

export default api;
