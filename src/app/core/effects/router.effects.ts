import { Injectable } from '@angular/core';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, map, tap, withLatestFrom } from 'rxjs/operators';

import { RouterActions, RouterActionTypes } from '@hero-battle/core/actions';
import { getRouterParams } from '@hero-battle/core/selectors';

@Injectable()
export class RouterEffects {
	constructor(private actions: Actions, private router: Router, private store: Store<any>) {}

	@Effect({ dispatch: false })
	navigate$ = this.actions.pipe(
		ofType<RouterActions.Navigate>(RouterActionTypes.Navigate),
		map((action) => action.payload),
		tap(({ commands, extras }) => this.router.navigate(commands, extras).then())
	);

	@Effect()
	onNavigateEnd$: Observable<Action> = this.router.events.pipe(
		filter((event: RouterEvent) => event instanceof NavigationEnd),
		map((event) => event as NavigationEnd),
		withLatestFrom(this.store.pipe(select(getRouterParams))),
		map(([event, params]) => new RouterActions.NavigationSuccess({ url: event.urlAfterRedirects, params }))
	);
}
