import { Action } from '@ngrx/store';

import { CoreActionTypes } from '@hero-battle/core/actions';
import { CurrentUserActionTypes, CurrentUserActions } from '@hero-battle/user/actions';

import { CurrentUserState, initialState } from './current-user.state';

const actionHandlers = {};

export function currentUserReducer(state: CurrentUserState = initialState, action: Action) {
	const actionHandler = actionHandlers[action.type];
	return actionHandler ? actionHandler(state, action) : state;
}

actionHandlers[CurrentUserActionTypes.GetSuccess] = (
	state: CurrentUserState,
	action: CurrentUserActions.GetSuccess
) => {
	const currentUser = action.payload.currentUser;
	return Object.assign({}, state, currentUser);
};

actionHandlers[CoreActionTypes.ResetApp] = () => initialState;
