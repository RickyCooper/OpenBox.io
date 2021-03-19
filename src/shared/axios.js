import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://iv5r1p24yk.execute-api.eu-central-1.amazonaws.com/production',
})

export default instance;