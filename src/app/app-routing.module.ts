import { NgModule } from '@angular/core';
import { ExtraOptions, Routes, RouterModule } from '@angular/router';

import { HomeContainer } from '@hero-battle/core/containers';

const routes: Routes = [
	{
		path: '',
		component: HomeContainer,
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
