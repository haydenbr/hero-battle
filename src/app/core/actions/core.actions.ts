import { Action } from '@ngrx/store';

import { validateActionTypes } from '@hero-battle/utilities';

export const CoreActionTypes = {
	AppStart: '[App] Start',
	Http401Unauthorized: '[App] Http 401 Unauthorized',
	Noop: 'noop',
	ResetApp: '[App] Reset',
};

validateActionTypes(CoreActionTypes);

export namespace CoreActions {
	export class AppStart implements Action {
		readonly type = CoreActionTypes.AppStart;
	}

	export class Http401Unauthorized implements Action {
		readonly type = CoreActionTypes.Http401Unauthorized;
	}

	export class Noop implements Action {
		readonly type = CoreActionTypes.Noop;
	}

	export class ResetApp implements Action {
		readonly type = CoreActionTypes.ResetApp;
	}
}
