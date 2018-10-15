import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from '@hero-battle/shared';
import { CoreModule } from '@hero-battle/core';
import { environment } from '@hero-battle/environment';
import { UserModule } from '@hero-battle/user';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const devImports: any[] = [];

if (['local', 'test'].includes(environment.environmentName)) {
	devImports.push(StoreDevtoolsModule.instrument({ name: 'HeroBattle Store DevTools' }));
}

@NgModule({
	imports: [
		BrowserModule,
		IonicModule.forRoot(),
		AppRoutingModule,
		SharedModule,
		CoreModule,
		devImports,
		BrowserAnimationsModule,
		UserModule,
	],
	declarations: [AppComponent],
	bootstrap: [AppComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	// CUSTOM_ELEMENTS_SCHEMA ensures that angular doesn't barf
	// when it sees elements not registered as components.
	// We have to allow this to use <ion-ripple-effect>
})
export class AppModule {}
