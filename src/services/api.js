import axios from 'axios';

const Api = axios.create({
    //set default endpoint API (menghubungkan ke backend express yang menggunakan port 3000)
    baseURL: 'http://localhost:3000'
})

export default Api