import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatStepperModule } from '@angular/material/stepper';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleFormComponent } from './pages/forms/simple-form/simple-form.component';
import { HomeComponent } from './pages/home/home.component';
import { NestedFormComponent } from './pages/forms/nested-form/nested-form.component';
import { FormArrayComponent } from './pages/forms/form-array/form-array.component';
import { FormStepperComponent } from './pages/forms/form-stepper/form-stepper.component';
import { StepOneComponent } from './pages/forms/form-stepper/steps/step-one/step-one.component';
import { StepTwoComponent } from './pages/forms/form-stepper/steps/step-two/step-two.component';
import { StepThreeComponent } from './pages/forms/form-stepper/steps/step-three/step-three.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [AppComponent, SimpleFormComponent, HomeComponent, NestedFormComponent, FormArrayComponent, FormStepperComponent, StepOneComponent, StepTwoComponent, StepThreeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatStepperModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
