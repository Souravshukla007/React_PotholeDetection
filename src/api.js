import axios from 'axios';

const API = axios.create({
  // Use localhost for development. Change this to your deployed backend URL for production.
  baseURL: 'http://127.0.0.1:5000/api',
  withCredentials: true, // This is crucial for sending session cookies
});

// You can add interceptors here for handling auth tokens, errors, etc.

export default API;
