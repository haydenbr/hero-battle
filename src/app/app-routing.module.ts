import { NgModule } from '@angular/core';
import { ExtraOptions, Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		loadChildren: 'src/app/landing/landing.module#LandingModule',
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
