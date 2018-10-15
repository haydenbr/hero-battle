import { Component, HostBinding } from '@angular/core';

@Component({
	selector: 'tappable',
	template: '<ng-content></ng-content>',
})
export class TappableComponent {
	@HostBinding('attr.tappable') readonly tappable = '';
}
