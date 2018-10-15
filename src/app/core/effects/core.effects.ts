import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { SessionActionTypes, CoreActions } from '@hero-battle/core/actions';

@Injectable()
export class CoreEffects {
	constructor(private actions: Actions) {}

	@Effect()
	loginSuccess$: Observable<Action> = this.actions.pipe(
		ofType(SessionActionTypes.LoginSuccess),
		map(() => new CoreActions.AppStart())
	);

	@Effect()
	loginFail$: Observable<Action> = this.actions.pipe(
		ofType(SessionActionTypes.LoginFail),
		map(() => new CoreActions.ResetApp())
	);
}
