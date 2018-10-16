import { Injectable } from '@angular/core';

import { of, Observable } from 'rxjs';

import { BattleDto } from '@hero-battle/battle/models';

import battleData from './battle-data.json';

@Injectable()
export class BattleApiService {
	getBattles(): Observable<BattleDto[]> {
		return of(battleData);
	}
}
