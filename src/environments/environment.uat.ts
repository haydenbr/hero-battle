import { Environment } from './environment.model';
import { version } from './version';

export const environment: Environment = {
	environmentName: 'uat',
	production: true,
	apiServer: 'https://uat.example.com',
	version,
};
