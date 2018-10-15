import { createFeatureSelector, createSelector } from '@ngrx/store';

import { RouterState } from '@hero-battle/core/reducers';

const getRouter = createFeatureSelector<{ state: RouterState; navigationId: number }>('router');
const getRouterState = createSelector(getRouter, (state) => state && state.state);

export const getRouterParams = createSelector(getRouterState, (state) => state && state.params);
