import { NavigationExtras } from '@angular/router';
import { Action } from '@ngrx/store';

import { HeroBattleRouteParams } from '@hero-battle/core/models';
import { validateActionTypes } from '@hero-battle/utilities';

export const RouterActionTypes = {
	Navigate: '[Router] Navigate',
	NavigationSuccess: '[Router] Navigation Success',
};

validateActionTypes(RouterActionTypes);

export namespace RouterActions {
	export class Navigate implements Action {
		readonly type = RouterActionTypes.Navigate;

		constructor(public payload: { commands: any[]; extras?: NavigationExtras }) {}
	}

	export class NavigationSuccess implements Action {
		readonly type = RouterActionTypes.NavigationSuccess;

		constructor(public payload: { url: string; params: HeroBattleRouteParams }) {}
	}
}
