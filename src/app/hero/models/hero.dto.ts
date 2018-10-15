export interface HeroDto {
	heroId: string;
	imageUrl: string;
	heroName: string;
	powerMap: { [key: string]: number };
}
