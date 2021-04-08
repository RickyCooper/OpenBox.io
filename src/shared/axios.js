import axios from 'axios';

const instance = axios.create({
    baseURL: `https://api.openbox.io`,
});

export default instance;
