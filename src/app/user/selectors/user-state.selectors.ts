import { createFeatureSelector, createSelector } from '@ngrx/store';

import { UserState } from '@hero-battle/user/reducers';

const getUserState = createFeatureSelector<UserState>('user');

export const getCurrentUserState = createSelector(getUserState, (state) => state && state.currentUser);
