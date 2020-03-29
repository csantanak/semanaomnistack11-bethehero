import axios from 'axios';

//colocando a base comum do back para toda a aplicacao
const api = axios.create({
    baseURL: 'http://localhost:3333',
})

export default api;