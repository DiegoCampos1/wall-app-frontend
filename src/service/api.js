import axios from 'axios';

const storedToken = sessionStorage.token;

const baseURL = 'http://localhost:3001/';
const timeout = 5000;
const headers = {
  'Content-Type': 'application/json',
};

if (storedToken) headers.Authorization = `Token ${storedToken}`;

const instance = axios.create({ baseURL, timeout, headers });

export const getAllPosts = async () => {
  try {
    return instance.get('posts');
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const getUserToken = async (email, password) => {
  try {
    return instance.post('auth/login', { email, password });
  } catch (error) {
    console.error(error);
    return error;
  }
};
