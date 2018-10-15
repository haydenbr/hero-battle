import { Component } from '@angular/core';

import { environment } from '@hero-battle/environment';

@Component({
	selector: 'version-number',
	template: '{{name}} {{version}}',
	styles: [
		`:host {
		background-color: #fff;
		bottom: 0;
		font-size: 14px;
		position: absolute;
		right: 0;
	}`,
	],
})
export class VersionNumberComponent {
	get version() {
		return environment.version;
	}

	get name() {
		return environment.environmentName;
	}
}
