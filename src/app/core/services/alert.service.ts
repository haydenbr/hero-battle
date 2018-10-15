import { Injectable } from '@angular/core';
import { AlertOptions } from '@ionic/core';
import { AlertController } from '@ionic/angular';

@Injectable()
export class AlertService {
	private alert: any;

	constructor(private alertCtrl: AlertController) {}

	display(message: string, options: AlertOptions = { header: '' }) {
		if (this.alert) {
			this.alert.message = message;
		} else {
			options.message = message;
			this.alertCtrl.create(options).then((alert) => {
				alert.present();
				alert.onWillDismiss().then(() => (this.alert = undefined));
				this.alert = alert;
			});
		}
	}

	dismiss() {
		if (this.alert) {
			this.alert.dismiss();
			this.alert = undefined;
		}
	}
}
