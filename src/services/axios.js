import axios from "axios";
import NProgress from "nprogress";

// axios.defaults.baseURL = 'https://reqres.in'
// axios.defaults.baseURL = 'http://127.0.0.1:8000'
axios.defaults.baseURL = "http://127.0.0.1:8000";
// axios.defaults.baseURL = "https://berwisataa.000webhostapp.com/laravel/public";

axios.defaults.withCredentials = true;

const token = localStorage.getItem("access_token");

if (token) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    NProgress.start();
    return config;
  },
  function (error) {
    // Do something with request error
    NProgress.done();
    console.error(error);
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Do something with response data
    NProgress.done();
    return response;
  },
  function (error) {
    // Do something with response error
    NProgress.done();
    console.error(error);
    return Promise.reject(error);
  }
);

export default axios;
