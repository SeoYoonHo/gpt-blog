import axios from 'axios';

const baseURL = 'http://localhost:8080';

const getAllPostURL = '/api/v1/post/searchList';
const createGptPostURL = '/api/v1/openai/question';

export const getAllPost = async () => {
  return await axios.get(baseURL + getAllPostURL, {
    params: {
      size: 20,
    }
  });
};

export const createGptPost = async () => {
  return await axios.post(baseURL + createGptPostURL, {
    contents: '스프링 jpa에서 엔터티의 필드 타입으로 String[] 을 선언할 수 없어? 대체방법의 예제코드도 알려줘',
  });
};