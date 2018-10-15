import { HeroDto } from './hero.dto';
import { PowerMap } from './power-map.interface';

export class HeroEntity {
	heroId: string;
	imageUrl: string;
	heroName: string;
	powerMap: PowerMap;

	constructor(hero: HeroDto) {
		Object.assign(this, hero);
	}
}
