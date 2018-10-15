import { RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';

import { RouterState } from '@hero-battle/core/reducers';

export class CustomSerializer implements RouterStateSerializer<RouterState> {
	serialize(routerState: RouterStateSnapshot): RouterState {
		const route = this.findCurrentRoute(routerState.root);
		const url = routerState.url;
		const params = route.params;
		const queryParams = routerState.root.queryParams;

		return { url, params, queryParams };
	}

	private findCurrentRoute(route: ActivatedRouteSnapshot) {
		let currentRoute = route;

		while (currentRoute.firstChild) {
			currentRoute = currentRoute.firstChild;
		}

		return currentRoute;
	}
}
