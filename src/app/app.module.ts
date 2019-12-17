import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ComponentFactoryResolver } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { CustomFormComponent } from './components/custom-form/custom-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomInputComponent,
    CustomFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    CustomFormComponent,
    CustomInputComponent
  ]
})
export class AppModule { }
