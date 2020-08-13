import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-94f2a.firebaseio.com/'
});

export default instance;