import { NgModule } from '@angular/core';

import { SharedModule } from '@hero-battle/shared';

import { COMPONENTS } from './components';
import { CONTAINERS } from './containers';
import { LandingRoutingModule } from './landing-routing.module';

@NgModule({
	imports: [SharedModule, LandingRoutingModule],
	declarations: [COMPONENTS, CONTAINERS],
})
export class LandingModule {}
