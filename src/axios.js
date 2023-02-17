import axios from "axios"



const instance = axios.create({
    baseURL: 'https://7ea4-102-88-35-174.eu.ngrok.io/'
});


export default instance