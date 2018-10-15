import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { v4 } from 'uuid';

// FAKE AUTH SERVICE
// TODO: replace contents of login method with real login request

@Injectable()
export class AthorizationService {
	login(auth: { username: string; password: string }) {
		return of({ accessToken: v4() });
	}
}
