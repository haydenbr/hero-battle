import { NgModule } from '@angular/core';

import { SharedModule } from '@hero-battle/shared';

import { CONTAINERS } from './containers';
import { EFFECTS } from './effects';
import { GUARDS } from './guards';
import { REDUCERS } from './reducers';
import { SERVICES } from './services';

@NgModule({
	imports: [SharedModule, EFFECTS, REDUCERS],
	declarations: [CONTAINERS],
	providers: [GUARDS, SERVICES],
})
export class CoreModule {}
