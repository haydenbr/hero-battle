import { Injectable } from '@angular/core';

import { of, Observable } from 'rxjs';

import { TeamDto } from '@hero-battle/team/models';

import teamData from './team-data.json';

@Injectable()
export class TeamApiService {
	getTeams(): Observable<TeamDto[]> {
		return of(teamData);
	}
}
