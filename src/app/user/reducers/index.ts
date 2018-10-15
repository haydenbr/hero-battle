import { ActionReducerMap, StoreModule } from '@ngrx/store';

import { currentUserReducer, CurrentUserState } from './current-user';

export interface UserState {
	currentUser: CurrentUserState;
}

const userReducer: ActionReducerMap<UserState> = {
	currentUser: currentUserReducer,
};

export const REDUCERS = [StoreModule.forFeature('user', userReducer)];
