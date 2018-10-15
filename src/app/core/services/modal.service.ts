import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalOptions } from '@ionic/core';

@Injectable()
export class ModalService {
	constructor(private modelCtrl: ModalController) {}

	display(modalOptions: ModalOptions) {
		return this.modelCtrl.create(modalOptions).then((modal) => {
			modal.present();
			return modal.onWillDismiss();
		});
	}

	dismiss() {
		this.modelCtrl.dismiss();
	}
}
