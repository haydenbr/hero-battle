import { RouterStateSerializer } from '@ngrx/router-store';

import { AlertService } from './alert.service';
import { HttpService } from './http.service';
import { LoadingService } from './loading.service';
import { ModalService } from './modal.service';
import { HeroBattleApiService } from './hero-battle-api.service';

export { AlertService } from './alert.service';
export { HttpService } from './http.service';
export { LoadingService } from './loading.service';
export { ModalService } from './modal.service';
export { HeroBattleApiService } from './hero-battle-api.service';

import { CustomSerializer } from './router-serializer.service';
const CustomSerializerService = { provide: RouterStateSerializer, useClass: CustomSerializer };

export const SERVICES = [
	AlertService,
	CustomSerializerService,
	HttpService,
	LoadingService,
	ModalService,
	HeroBattleApiService,
];
