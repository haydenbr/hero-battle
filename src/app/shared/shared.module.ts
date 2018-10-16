import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IonicModule } from '@ionic/angular';

import { COMPONENTS } from './components';
import { MODALS } from './modals';

const MODULES = [CommonModule, HttpClientModule, RouterModule, ReactiveFormsModule, IonicModule, FontAwesomeModule];

@NgModule({
	imports: [MODULES],
	exports: [MODULES, COMPONENTS],
	declarations: [COMPONENTS, MODALS],
	entryComponents: [MODALS],
})
export class SharedModule {}
