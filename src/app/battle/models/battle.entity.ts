import { TeamEntity } from '@hero-battle/team/models';

import { BattleDto } from './battle.dto';

export class BattleEntity {
	battleId: string;
	name: string;
	teams: TeamEntity[];
	date: string;

	constructor(battle: BattleDto, teams: TeamEntity[]) {
		this.battleId = battle.battleId;
		this.name = battle.name;
		this.date = battle.date;

		this.teams = teams;
	}
}
