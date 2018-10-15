import { Action } from '@ngrx/store';

import { validateActionTypes } from '@hero-battle/utilities';

export const SessionActionTypes = {
	Login: '[Session] Login',
	LoginFail: '[Session] Login Fail',
	LoginSuccess: '[Session] Login Success',
	SessionStart: '[Session] Start',
	SessionRestart: '[Session] Restart',
};

validateActionTypes(SessionActionTypes);

export namespace SessionActions {
	export class Login implements Action {
		readonly type = SessionActionTypes.Login;
	}

	export class LoginFail implements Action {
		readonly type = SessionActionTypes.LoginFail;
	}

	export class LoginSuccess implements Action {
		readonly type = SessionActionTypes.LoginSuccess;
	}

	export class SessionStart implements Action {
		readonly type = SessionActionTypes.SessionStart;
	}

	export class SessionRestart implements Action {
		readonly type = SessionActionTypes.SessionRestart;
	}
}
