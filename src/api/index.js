import axios from './axios-set';
import qs from 'qs';

export const postUserLogin = data => axios.post('/common/user/login', qs.stringify(data))
export const getMenuList = params => axios('common/function/list')