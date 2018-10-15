import { Injectable } from '@angular/core';

import { HeroBattleApiService } from '@hero-battle/core/services';
import { UserDto } from '@hero-battle/user/models';

@Injectable()
export class CurrentUserService {
	private readonly endpoint = 'currentuser';

	constructor(private spoke: HeroBattleApiService) {}

	getCurrentUser() {
		return this.spoke.get<UserDto>(this.endpoint);
	}
}
