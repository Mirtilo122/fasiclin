import axios from "axios";

const api = axios.create({
    baseURL: 'https://fasiclin-backend.vercel.app/',
    
})

export default api