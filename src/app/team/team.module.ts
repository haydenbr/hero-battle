import { NgModule } from '@angular/core';

import { SharedModule } from '@hero-battle/shared';

import { TeamRoutingModule } from './team-routing.module';
import { COMPONENTS } from './components';
import { CONTAINERS } from './containers';
import { SERVICES } from './services';

@NgModule({
	imports: [SharedModule, TeamRoutingModule],
	declarations: [COMPONENTS, CONTAINERS],
	providers: [SERVICES],
})
export class TeamModule {}
