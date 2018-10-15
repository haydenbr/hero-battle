import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable()
export class LoadingService {
	private loader: any;

	constructor(private loadingCtrl: LoadingController) {}

	display(content: string): Promise<any> {
		if (this.loader) {
			this.loader.content = content;
			return Promise.resolve();
		} else {
			return this.loadingCtrl.create({ content }).then((loader) => {
				loader.present();
				this.loader = loader;
			});
		}
	}

	dismiss() {
		if (this.loader) {
			this.loader.dismiss();
			this.loader = undefined;
		}
	}
}
