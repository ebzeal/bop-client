import axios from 'axios';

export const apiInstance = axios.create({
  // baseURL: 'https://neon-ah-staging.herokuapp.com/api/v1'
  baseURL: 'http://localhost:5000/api/v1'
});

const makeRequest = (url, options = { method: 'GET' }) => {
  console.log('makeRequest -> url', url);
  return apiInstance({
    url,
    method: options.method,
    data: options.body,
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
      Authorization: localStorage.getItem('userToken') ? `Bearer ${localStorage.getItem('userToken')}` : ''
    }
  }).then(response => response.data);
};

export default makeRequest;
