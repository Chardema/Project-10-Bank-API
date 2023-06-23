import axios from 'axios';
import { baseUrl } from './baseUrl';
import { setLocalStorage, deleteLocalStorage } from './serviceCookie';

class ServiceAuth {
    register(firstName, lastName, email, password) {
        return axios.post(baseUrl + '/signup', {
            firstName,
            lastName,
            email,
            password,
        });
    }

    async login(email, password) {
        const response = await axios.post(baseUrl + '/login', { email, password });
        const token = response.data.body.token;
        if (token) {
            setLocalStorage('signin-token', token);
        }
        return response.data;
    }

    logout() {
        deleteLocalStorage('signin-token');
    }
}

export default new ServiceAuth();
