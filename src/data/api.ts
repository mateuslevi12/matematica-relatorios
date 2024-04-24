import axios from "axios";

const axiosConfig = {
    baseURL: "https://api-matematic.vercel.app/"
}

const api = axios.create(axiosConfig)

export { api }
