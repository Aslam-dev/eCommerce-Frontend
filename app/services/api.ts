import axios from 'axios';

// get backend API
const API = axios.create({
  baseURL: 'http://localhost:9002/api/products', 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default API;