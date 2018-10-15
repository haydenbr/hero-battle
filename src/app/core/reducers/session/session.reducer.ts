import { Action } from '@ngrx/store';

import { CoreActionTypes, SessionActionTypes } from '@hero-battle/core/actions';

import { SessionState, initialState } from './session.state';

const actionHandlers = {};

export function sessionReducer(state: SessionState = initialState, action: Action) {
	const actionHandler = actionHandlers[action.type];
	return actionHandler ? actionHandler(state, action) : state;
}

actionHandlers[SessionActionTypes.LoginSuccess] = (state: SessionState) =>
	Object.assign({}, state, { isAuthorized: true });

actionHandlers[SessionActionTypes.SessionRestart] = actionHandlers[SessionActionTypes.SessionStart];

actionHandlers[CoreActionTypes.ResetApp] = () => initialState;
