import { NgModule } from '@angular/core';
import { ExtraOptions, Routes, RouterModule } from '@angular/router';

import { LoginContainer } from '@hero-battle/core/containers';

const routes: Routes = [
	{
		path: '',
		loadChildren: 'src/app/landing/landing.module#LandingModule',
	},
	{
		path: 'hero',
		loadChildren: 'src/app/hero/hero.module#HeroModule',
	},
	{
		path: 'team',
		loadChildren: 'src/app/team/team.module#TeamModule',
	},
	{
		path: 'battle',
		loadChildren: 'src/app/battle/battle.module#BattleModule',
	},
	{
		path: 'login',
		component: LoginContainer,
	},
	{ path: '**', redirectTo: '' },
];

const routerConfig: ExtraOptions = {
	useHash: true,
};

@NgModule({
	imports: [RouterModule.forRoot(routes, routerConfig)],
})
export class AppRoutingModule {}
