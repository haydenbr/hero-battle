import { Component, Input, HostBinding } from '@angular/core';
import { faAngleLeft, faAngleRight, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'circle-button',
	templateUrl: 'circle-button.component.html',
	styleUrls: ['circle-button.component.scss'],
})
export class CircleButtonComponent {
	@Input() direction = 'left';
	@HostBinding('attr.direction') directionAttr = this.direction;
	@Input() size = '1x';
	@HostBinding('attr.size') sizeAttr = this.size;
	icon: IconDefinition = {
		left: faAngleLeft,
		right: faAngleRight,
	}[this.direction];
}
