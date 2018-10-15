import { HeroEntity } from '@hero-battle/hero/models';

import { TeamDto } from './team.dto';

export class TeamEntity {
	teamId: string;
	teamName: string;
	primaryColor: string;
	secondaryColor: string;
	teamHeroes: HeroEntity[];

	constructor(team: TeamDto, heroes: HeroEntity[]) {
		Object.assign(this, team, { teamHeroes: heroes });
	}
}
