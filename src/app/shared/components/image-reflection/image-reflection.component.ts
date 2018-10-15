import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { TweenConfig, Expo, TweenLite } from 'gsap';

@Component({
	selector: 'image-reflection',
	templateUrl: 'image-reflection.component.html',
	styleUrls: ['image-reflection.component.scss'],
})
export class ImageReflectionComponent {
	@Input() imagePath: string;
	@Input() additionalStyles?: object;

	@ViewChild('imageReflection') imageReflection: ElementRef;

	setImageAndStyles() {
		return Object.assign({}, { 'background-image': `url(${this.imagePath})` }, this.additionalStyles);
	}

	animateInReflection() {
		const config: TweenConfig = { autoAlpha: 0, y: 100, force3D: true, ease: Expo.easeOut };
		return TweenLite.from(this.imageReflection.nativeElement, 0.9, config);
	}
}
