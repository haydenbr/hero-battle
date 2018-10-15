import { values } from 'lodash';

import { environment } from '@hero-battle/environment';

const typeCache: { [label: string]: boolean } = {};

export function validateActionTypes(actionTypes) {
	if (!environment.production) {
		values(actionTypes).forEach((actionType) => {
			if (typeCache[actionType]) {
				throw new Error(`Action type "${actionType}" is not unique"`);
			}

			typeCache[actionType] = true;
		});
	}
}
