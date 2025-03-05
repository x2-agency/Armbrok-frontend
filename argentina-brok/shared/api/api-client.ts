import axios from 'axios';
import Cookies from 'js-cookie';
import { getLocale } from 'next-intl/server';

import { DEFAULT_LOCALE } from '@/i18n/routing';

const apiClient = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL || '',
});

const LOCALE_COOKIE = 'NEXT_LOCALE';

apiClient.interceptors.request.use(
	async config => {
		const isServer = typeof window === 'undefined';
		let locale: string;

		if (isServer) {
			locale = await getLocale();
		} else {
			locale = Cookies.get(LOCALE_COOKIE) ?? DEFAULT_LOCALE;
		}

		config.params = { ...config.params, locale };

		const token = Cookies.get('token');
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}

		return config;
	},
	error => {
		return Promise.reject(error);
	}
);

apiClient.interceptors.response.use(
	response => {
		return response;
	},
	error => {
		const originalRequest = error.config;

		if (
			error.response &&
			error.response.status === 401 &&
			!originalRequest._retry
		) {
			originalRequest._retry = true;

			const refreshToken = Cookies.get('refreshToken');
			return apiClient
				.post('/auth/refresh-token', { token: refreshToken })
				.then(({ data }) => {
					Cookies.set('token', data.token);
					apiClient.defaults.headers.common['Authorization'] =
						'Bearer ' + data.token;
					originalRequest.headers.Authorization = 'Bearer ' + data.token;
					return apiClient(originalRequest);
				})
				.catch(err => {
					return Promise.reject(err);
				});
		}

		return Promise.reject(error);
	}
);

export default apiClient;
