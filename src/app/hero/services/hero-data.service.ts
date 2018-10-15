import { Injectable } from '@angular/core';

import { of, Observable } from 'rxjs';

import { HeroDto } from '@hero-battle/hero/models';

import heroData from './hero-data.json';

@Injectable()
export class HeroDataService {
	getHeroes(): Observable<HeroDto[]> {
		return of(heroData);
	}
}
