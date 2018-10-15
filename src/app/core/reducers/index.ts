import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';

import { sessionReducer } from './session';

export const REDUCERS = [
	StoreModule.forRoot({}),
	StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
	StoreModule.forFeature('router', routerReducer),
	StoreModule.forFeature('session', sessionReducer),
];

export { RouterState } from './router';
export { SessionState } from './session';
