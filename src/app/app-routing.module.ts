import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { SimpleFormComponent } from './pages/forms/simple-form/simple-form.component';
import { NestedFormComponent } from './pages/forms/nested-form/nested-form.component';
import { FormArrayComponent } from './pages/forms/form-array/form-array.component';
import { FormStepperComponent } from './pages/forms/form-stepper/form-stepper.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'simple-form', component: SimpleFormComponent },
  { path: 'nested-form', component: NestedFormComponent },
  { path: 'form-array', component: FormArrayComponent },
  { path: 'form-stepper', component: FormStepperComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
