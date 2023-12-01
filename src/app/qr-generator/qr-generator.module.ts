import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QrGeneratorRoutingModule } from './qr-generator-routing.module';
import { QrGeneratorComponent } from './qr-generator.component';


@NgModule({
  declarations: [
    QrGeneratorComponent
  ],
  imports: [
    CommonModule,
    QrGeneratorRoutingModule
  ]
})
export class QrGeneratorModule { }
