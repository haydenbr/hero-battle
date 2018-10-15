import { Injectable } from '@angular/core';
import { CanActivate, CanLoad } from '@angular/router';
import { Store, select } from '@ngrx/store';

import { isAuthorized } from '@hero-battle/core/selectors';

@Injectable()
export class AuthorizationGuard implements CanActivate, CanLoad {
	constructor(private store: Store<any>) {}

	canActivate() {
		return this.isAuthorized();
	}

	canLoad() {
		return this.isAuthorized();
	}

	private isAuthorized() {
		return this.store.pipe(select(isAuthorized));
	}
}
