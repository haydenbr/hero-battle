import { Injectable } from '@angular/core';

import { HeroBattleApiService } from '@hero-battle/core/services';
import { UserDto } from '@hero-battle/user/models';

@Injectable()
export class CurrentUserApiService {
	private readonly endpoint = 'currentuser';

	constructor(private api: HeroBattleApiService) {}

	getCurrentUser() {
		return this.api.get<UserDto>(this.endpoint);
	}
}
