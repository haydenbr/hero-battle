import { Environment } from './environment.model';
import { version } from './version';

export const environment: Environment = {
	environmentName: 'local',
	production: true,
	apiServer: 'http://localhost:3000',
	version,
};
