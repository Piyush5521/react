import axios from 'axios'
import React from 'react'

const customheader = () => {
    const headers = {
        "Content-Type": "application/json",
        "user": "jwt",
        "piyush":"cvxgdffg"
    };

    return headers;
}

const ApiInterceptor = axios.create({
    headers: customheader(),
    timeout: 10000,
    baseURL: 'https://jsonplaceholder.typicode.com',
})


ApiInterceptor.interceptors.request.use(
    (config) => {
        console.log('Response Sending...');
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

ApiInterceptor.interceptors.response.use(
    (response) => {
        console.log('Response Received...');
        return response;
    },
    (error) => {
        console.error('Error', error.response || error.message);
    }
)

export default ApiInterceptor
