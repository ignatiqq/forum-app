import axios, { AxiosResponse } from "axios";

import { IRequestArgs, IRequestConfig, requestMethods } from "./index";

function makeRequest<T>({url, method, body, ...config}: IRequestArgs<T>): Promise<AxiosResponse> {
    return axios({
        url: url,
        method,
        data: body,
        ...config
    })
}

const requests = Object.freeze({
     post<T>(url: string, body: T, config: IRequestConfig) {
        return makeRequest({url, method: requestMethods.POST, body, ...config})
    },
     get(url: string, config: IRequestConfig) {
        return makeRequest({url, method: requestMethods.GET, ...config})
    },
     put<T>(url: string, body: T, config: IRequestConfig) {
        return makeRequest({url, method: requestMethods.PUT, body, ...config})
    } 
})


const makeApi = (baseUrl: string, headers?: {[key: string]: string}) => {
    return {
        get(endpoint: string, config?: IRequestConfig) {
            return requests.get(`${baseUrl}${endpoint}`, {...config, headers});
        },
        post<T>(endpoint: string, body: T, config?: IRequestConfig) {
            return requests.post(`${baseUrl}${endpoint}`, body, {...config, headers});
        }
    }
}

export default makeApi;