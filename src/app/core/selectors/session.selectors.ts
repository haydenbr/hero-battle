import { createFeatureSelector, createSelector } from '@ngrx/store';

import { SessionState } from '@hero-battle/core/reducers';

const getSessionState = createFeatureSelector<SessionState>('session');
export const isAuthorized = createSelector(getSessionState, (state) => state && state.isAuthorized);
export const getSessionId = createSelector(getSessionState, (state) => state && state.sessionId);
export const getAccessToken = createSelector(getSessionState, (state) => state && state.accessToken);
