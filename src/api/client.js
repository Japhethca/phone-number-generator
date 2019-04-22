import axios from 'axios';

const apiUrl = process.env.NODE_ENV === 'production' 
  ? 'https://phone-number-generator-api-cj.herokuapp.com/api/v1'
  : 'http://localhost:4000/api/v1/';
  
const client = axios.create({
  baseURL: 'https://phone-number-generator-api-cj.herokuapp.com/api/v1',
});

export default client;