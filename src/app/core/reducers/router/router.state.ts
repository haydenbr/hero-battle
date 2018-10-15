import { Params } from '@angular/router';

import { HeroBattleRouteParams } from '@hero-battle/core/models';

export interface RouterState {
	url: string;
	params: HeroBattleRouteParams;
	queryParams: Params;
}
