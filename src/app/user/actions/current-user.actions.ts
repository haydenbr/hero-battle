import { Action } from '@ngrx/store';

import { UserDto } from '@hero-battle/user/models';
import { validateActionTypes } from '@hero-battle/utilities';

export const CurrentUserActionTypes = {
	Get: '[Current User] Get',
	GetFail: '[Current User] Get Fail',
	GetSuccess: '[Current User] Get Success',
};

validateActionTypes(CurrentUserActionTypes);

export namespace CurrentUserActions {
	export class Get implements Action {
		readonly type = CurrentUserActionTypes.Get;
	}

	export class GetFail implements Action {
		readonly type = CurrentUserActionTypes.GetFail;

		constructor(public payload?: any) {}
	}

	export class GetSuccess implements Action {
		readonly type = CurrentUserActionTypes.GetSuccess;

		constructor(public payload: { currentUser: UserDto }) {}
	}
}
