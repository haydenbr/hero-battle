import { Injectable } from '@angular/core';

import { environment } from '@hero-battle/environment';

import { HttpService } from './http.service';

@Injectable()
export class HeroBattleApiService {
	private readonly apiUrl = `${environment.apiServer}/api/`;

	constructor(private http: HttpService) {}

	get<T>(endpoint: string) {
		return this.http.get<T>(this.apiUrl + endpoint);
	}

	post<T>(endpoint: string, body) {
		return this.http.post<T>(this.apiUrl + endpoint, body);
	}

	put<T>(endpoint: string, body) {
		return this.http.put<T>(this.apiUrl + endpoint, body);
	}
}
