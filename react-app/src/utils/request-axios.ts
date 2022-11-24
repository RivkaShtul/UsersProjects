import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;

console.log(`api:${baseUrl}`);
const API = axios.create({
  baseURL: baseUrl,
  timeout: 30000,
});

const request = {
  get: (url: string, token: string) => API.get(url, {headers: {"Authorization": `Bearer ${token}`}}),
  post: (url: string, data) => API.post(url, data),
};

export default request;
