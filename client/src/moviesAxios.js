import axios from 'axios';

const moviesAxios = axios.create({
    baseURL: 'http://localhost:3001/',
});

export default moviesAxios;