import { Environment } from './environment.model';
import { version } from './version';

export const environment: Environment = {
	environmentName: 'test',
	production: true,
	apiServer: 'https://test.example.com',
	version,
};
