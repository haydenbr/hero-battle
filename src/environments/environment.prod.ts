import { Environment } from './environment.model';
import { version } from './version';

export const environment: Environment = {
	environmentName: 'prod',
	production: true,
	apiServer: 'https://example.com',
	version,
};
