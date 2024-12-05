import { getAccessToken } from "@/services/auth-token.service";
import axios, { CreateAxiosDefaults } from "axios";

const options:CreateAxiosDefaults = {
    baseURL: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true

}

const axiosclassic = axios.create(options)

const axiosWithAuth = axios.create(options)

axiosWithAuth.interceptors.request.use(
    config => {
    const accessToken = getAccessToken()

    if (config?.headers && accessToken)
		config.headers.Authorization = `Bearer ${accessToken}`

    return config
})

axiosWithAuth.interceptors.response.use(
    config => config,
    async error => {
        
    }
)