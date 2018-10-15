import { NgModule } from '@angular/core';

import { SharedModule } from '@hero-battle/shared';

import { TeamRoutingModule } from './team-routing.module';
import { COMPONENTS } from './components';
import { CONTAINERS } from './containers';
import { EFFECTS } from './effects';
import { REDUCERS } from './reducers';
import { SERVICES } from './services';

@NgModule({
	imports: [SharedModule, TeamRoutingModule, EFFECTS, REDUCERS],
	declarations: [COMPONENTS, CONTAINERS],
	providers: [SERVICES],
})
export class TeamModule {}
