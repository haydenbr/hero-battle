import { PowerMap } from './power-map.interface';

export interface HeroDto {
	heroId: string;
	avatar: string;
	name: string;
	powerMap: PowerMap;
}
