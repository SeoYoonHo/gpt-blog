import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getAllPost = async () => {
  return await apiClient.get('/api/v1/post/searchList');
};
