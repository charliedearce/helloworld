import axios from 'axios';
import { loadProgressBar } from 'axios-progress-bar'
import 'axios-progress-bar/dist/nprogress.css'

let token =  localStorage.getItem('login') ? JSON.parse(localStorage.getItem('login'))['access_token'] : '';

const instance = axios.create({
    baseURL: 'https://murmuring-plains-32598.herokuapp.com/api/',
    headers: {
        'Authorization': `Bearer ` + token,
    }
});

// instance.interceptors.response.use(undefined, function (error) {
//     if(error.message === "Network Error") {
//         localStorage.clear();
//         window.location.replace("/");
//         return Promise.reject(error);
//     }
// });

loadProgressBar(undefined, instance)
export default instance;