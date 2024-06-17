import axios, { AxiosRequestConfig } from "axios"

const config: AxiosRequestConfig = {
    baseURL: "http://localhost:3000/api",
}
export const api = axios.create(config)
