import { chain } from 'lodash';

export function getCurrentPath() {
	return window.location.hash.replace('#', '');
}

export function interpolateUrlParams(endpoint: string, params: { [key: string]: any }) {
	return chain(endpoint)
		.split('/')
		.filter((s) => !!s && s.startsWith(':'))
		.map((s) => s.substring(1))
		.map((param) => Object.assign({ key: param, value: params[param] }))
		.reduce(
			(interpolated, param) => (param.value ? interpolated.replace(`:${param.key}`, param.value) : interpolated),
			endpoint
		)
		.value();
}

export function getRouteParam(url: string, key: string) {
	const urlSegments = url.split('/');
	const keyIndex = urlSegments.findIndex((segment) => segment === key);
	return keyIndex >= 0 && urlSegments[keyIndex + 1];
}
