import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { HomeContainer } from './containers';

const routes: Route[] = [{ path: '', component: HomeContainer }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
})
export class LandingRoutingModule {}
