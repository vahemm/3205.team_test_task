import axios from 'axios';

const { REACT_APP_API_URL, REACT_APP_TEST_API_URL } = process.env;
const testMode = localStorage.getItem('testMode');

const api = axios.create({
  baseURL: testMode === 'true' ? REACT_APP_TEST_API_URL : REACT_APP_API_URL,
});

api.interceptors.request.use(
  (config) => {
    config.data = { ...config.data, testMode };
    return config;
  },
  (e) => Promise.reject(e),
);

export class Api {
  static async find(data = {}) {
    const clonedData: any = { ...data };
    return await api.post('api/user', { ...clonedData });
  }
}
