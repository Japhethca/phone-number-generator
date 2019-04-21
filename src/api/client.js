import axios from 'axios';

const client = axios.create({
  baseURL: process.env.API_URL || 'http://localhost:4000/api/v1/',
});

export default client;