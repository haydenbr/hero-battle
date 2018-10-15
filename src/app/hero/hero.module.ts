import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SharedModule } from '@hero-battle/shared';

import { COMPONENTS } from './components';
import { CONTAINERS } from './containers';
import { SERVICES } from './services';

@NgModule({
	imports: [SharedModule],
	declarations: [COMPONENTS, CONTAINERS],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	providers: [SERVICES],
})
export class HeroModule {}
