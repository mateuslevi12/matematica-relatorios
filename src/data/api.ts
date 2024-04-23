import axios from "axios";

const axiosConfig = {
    baseURL: "http://localhost:3002"
}

const api = axios.create(axiosConfig)

export { api }
