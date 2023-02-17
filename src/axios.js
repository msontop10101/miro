import axios from "axios"



const instance = axios.create({
    baseURL: 'https://4169-197-210-78-96.eu.ngrok.io/'
});


export default instance