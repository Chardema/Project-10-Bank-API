import axios from 'axios';
import { baseUrl } from './baseUrl';
import {getLocalStorage} from "./serviceCookie";

export const getProfile = () => {
    const token = getLocalStorage('signin-token');
    return axios.post(
        baseUrl + '/profile',
        {},
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
};



export const updateProfile = (newFirstName, newLastName) => {
    const token = getLocalStorage('signin-token');
    return axios.put(
        baseUrl + '/profile',
        {
            firstName: newFirstName,
            lastName: newLastName,
        },
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
};

