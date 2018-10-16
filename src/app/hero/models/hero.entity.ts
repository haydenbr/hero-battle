import { HeroDto } from './hero.dto';
import { PowerMap } from './power-map.interface';

export class HeroEntity {
	heroId: string;
	avatar: string;
	name: string;
	powerMap: PowerMap;

	constructor(hero: HeroDto) {
		Object.assign(this, hero);
	}
}
