import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { SessionActions } from '@hero-battle/core/actions';
import { isAuthorized } from '@hero-battle/core/selectors';

@Component({
	selector: 'app',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	readonly isAuthorized$ = this.store.pipe(select(isAuthorized));

	constructor(private store: Store<any>) {}

	ngOnInit() {
		this.store.dispatch(new SessionActions.Login());
	}
}
