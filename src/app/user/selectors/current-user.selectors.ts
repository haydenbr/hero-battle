import { createSelector } from '@ngrx/store';

import { getCurrentUserState } from './user-state.selectors';

export const getCurrentUser = getCurrentUserState;
export const getCurrentUserId = createSelector(getCurrentUser, (currentUser) => currentUser && currentUser.userId);
