import axios from 'axios';
import { API_URL } from '../constants';
import { getDataStorage } from '../utils/storage.utils';

const getAccessAndRefreshToken = async () => {
    const accessToken = await getDataStorage('accessToken');
    const refreshToken = await getDataStorage('refreshToken');
    return { accessToken, refreshToken };
};

const get = async (endpoint, body, configs = {}) => {
    const { accessToken, refreshToken } = await getAccessAndRefreshToken();
    const result = await axios.get(`${API_URL}/${endpoint}`, body, {
        ...configs,
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'x-refresh': refreshToken,
            ...configs?.headers,
        },
    });
    return result.data;
};

const post = async (endpoint, body, configs = {}) => {
    const { accessToken, refreshToken } = await getAccessAndRefreshToken();
    const result = await axios.post(`${API_URL}/${endpoint}`, body, {
        ...configs,
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'x-refresh': refreshToken,
            ...configs?.headers,
        },
    });
    return result.data;
};

const put = async (endpoint, body, configs = {}) => {
    const { accessToken, refreshToken } = await getAccessAndRefreshToken();
    const result = await axios.put(`${API_URL}/${endpoint}`, body, {
        ...configs,
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'x-refresh': refreshToken,
            ...configs?.headers,
        },
    });
    return result.data;
};

const FetchAdapter = {
    get,
    post,
    put,
};

export default FetchAdapter;
