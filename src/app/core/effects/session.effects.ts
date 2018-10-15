import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { SessionActions, CoreActionTypes } from '@hero-battle/core/actions';
import { CurrentUserActionTypes } from '@hero-battle/user/actions';

@Injectable()
export class SessionEffects {
	private pageVisible$ = fromEvent(window.document, 'visibilitychange').pipe(
		filter(() => window.document.visibilityState === 'visible')
	);

	constructor(private actions: Actions) {}

	@Effect()
	getUserSuccess$: Observable<Action> = this.actions.pipe(
		ofType(CurrentUserActionTypes.GetSuccess),
		map(() => new SessionActions.LoginSuccess())
	);

	@Effect()
	getUserFail$: Observable<Action> = this.actions.pipe(
		ofType(CurrentUserActionTypes.GetFail),
		map(() => new SessionActions.LoginFail())
	);

	@Effect()
	sessionStart$: Observable<Action> = this.actions.pipe(
		ofType(CoreActionTypes.AppStart),
		map(() => new SessionActions.SessionStart())
	);

	@Effect()
	sessionRestart$: Observable<Action> = this.pageVisible$.pipe(map(() => new SessionActions.SessionRestart()));
}
