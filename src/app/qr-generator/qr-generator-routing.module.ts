import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QrGeneratorComponent } from './qr-generator.component';

const routes: Routes = [{ path: '', component: QrGeneratorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QrGeneratorRoutingModule { }
