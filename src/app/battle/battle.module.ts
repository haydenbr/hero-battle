import { NgModule } from '@angular/core';

import { SharedModule } from '@hero-battle/shared';

import { BattleRoutingModule } from './battle-routing.module';
import { COMPONENTS } from './components';
import { CONTAINERS } from './containers';
import { SERVICES } from './services';

@NgModule({
	imports: [SharedModule, BattleRoutingModule],
	declarations: [COMPONENTS, CONTAINERS],
	providers: [SERVICES],
})
export class BattleModule {}
