import axios from "axios"



const instance = axios.create({
    baseURL: 'https://82df-102-88-35-65.eu.ngrok.io/'
});


export default instance