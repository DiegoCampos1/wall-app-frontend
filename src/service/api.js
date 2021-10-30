import axios from 'axios';

let storedToken = localStorage.getItem('token');

const baseURL = 'http://localhost:3001/';
const timeout = 5000;
const headers = {
  'Content-Type': 'application/json',
};

if (storedToken) headers.Authorization = `Bearer ${storedToken}`;

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

export const createUserApi = async (name, email, password) => {
  try {
    return instance.post('users', { name, email, password });
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const createPostApi = async (text, author, authorId) => {
  storedToken = localStorage.getItem('token');
  if (storedToken) headers.Authorization = `Bearer ${storedToken}`;
  const instancePost = axios.create({ baseURL, timeout, headers });
  try {
    return instancePost.post('posts', { text, author, authorId });
  } catch (error) {
    console.error(error);
    return error;
  }
};
