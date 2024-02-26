import axios from 'axios';

const baseURL = 'http://localhost:8080';

const getAllPostURL = '/api/v1/post/searchList';
const createGptPostURL = '/api/v1/openai/question';

export const getAllPost = async () => {
  return await axios.get(baseURL + getAllPostURL, {
    params: {
      size: 100,
    }
  });
};

export const createGptPost = async (param) => {
  return await axios.post(baseURL + createGptPostURL, param);
};