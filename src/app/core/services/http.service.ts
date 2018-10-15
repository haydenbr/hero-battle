import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { CoreActions } from '@hero-battle/core/actions';
import { responseType, RequestMethod } from '@hero-battle/core/models';
import { interpolateUrlParams } from '@hero-battle/utilities';

import { DataService } from './data.service';

@Injectable()
export class HttpService implements DataService {
	constructor(private http: HttpClient, private store: Store<any>) {}

	get<T>(url: string) {
		return this.makeRequest<T>(RequestMethod.GET, url);
	}

	post<T>(url: string, body) {
		return this.makeRequest<T>(RequestMethod.POST, url, body);
	}

	put<T>(url: string, body) {
		return this.makeRequest<T>(RequestMethod.PUT, url, body);
	}

	delete<T>(url: string) {
		return this.makeRequest<T>(RequestMethod.DELETE, url);
	}

	private makeRequest<T>(method: RequestMethod, url: string, body?) {
		const requestOptions = {
			withCredentials: true,
			responseType: 'json' as responseType, // this is definitely an angular typing bug
		};

		url = body ? interpolateUrlParams(url, body) : url;
		const request = new HttpRequest(method, url, body, requestOptions);

		return this.http
			.request(request)
			.pipe(
				map((response: HttpResponse<T>) => response.body),
				catchError((error) => this.handle401Unauthorized(error))
			);
	}

	private handle401Unauthorized(error: HttpErrorResponse) {
		if ([0, 401].includes(error.status)) {
			this.store.dispatch(new CoreActions.Http401Unauthorized());
		}

		return throwError(error);
	}
}
