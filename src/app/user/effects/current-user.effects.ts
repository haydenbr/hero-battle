import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, switchMap, catchError, tap } from 'rxjs/operators';

import { SessionActionTypes } from '@hero-battle/core/actions';
import { LoadingService } from '@hero-battle/core/services';
import { CurrentUserActions, CurrentUserActionTypes } from '@hero-battle/user/actions';
import { CurrentUserService } from '@hero-battle/user/services';

@Injectable()
export class CurrentUserEffects {
	constructor(
		private actions: Actions,
		private currentUserSvc: CurrentUserService,
		private loadingCtrl: LoadingService
	) {}

	@Effect()
	login$: Observable<Action> = this.actions.pipe(
		ofType(SessionActionTypes.Login),
		map(() => new CurrentUserActions.Get())
	);

	@Effect()
	getCurrentUser$: Observable<Action> = this.actions.pipe(
		ofType<CurrentUserActions.Get>(CurrentUserActionTypes.Get),
		switchMap(() => this.loadingCtrl.display('Loading')),
		switchMap(() => this.currentUserSvc.getCurrentUser()),
		map((currentUser) => new CurrentUserActions.GetSuccess({ currentUser })),
		catchError((err) => of(new CurrentUserActions.GetFail(err))),
		tap(() => this.loadingCtrl.dismiss())
	);
}
