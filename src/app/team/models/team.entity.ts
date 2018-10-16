import { HeroEntity } from '@hero-battle/hero/models';

import { TeamDto } from './team.dto';

export class TeamEntity {
	teamId: string;
	name: string;
	primaryColor: string;
	secondaryColor: string;
	logo: string;
	backgroundImage: string;
	teamMembers: HeroEntity[];
	private teamCaptainId: string;

	constructor(team: TeamDto, teamMembers: HeroEntity[]) {
		this.teamId = team.teamId;
		this.name = team.name;
		this.primaryColor = team.primaryColor;
		this.secondaryColor = team.secondaryColor;
		this.logo = team.logo;
		this.backgroundImage = team.backgroundImage;
		this.teamCaptainId = team.teamCaptainId;

		this.teamMembers = teamMembers;
	}

	get teamCaptain() {
		return this.teamMembers.find((h) => h.heroId === this.teamCaptainId);
	}
}
