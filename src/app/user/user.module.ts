import { NgModule } from '@angular/core';

import { SharedModule } from '@hero-battle/shared';

import { EFFECTS } from './effects';
import { REDUCERS } from './reducers';
import { SERVICES } from './services';

@NgModule({
	imports: [SharedModule, EFFECTS, REDUCERS],
	providers: [SERVICES],
})
export class UserModule {}
