import { Component,ViewContainerRef, ViewChild, ComponentFactoryResolver, ChangeDetectorRef, } from '@angular/core';
import { CustomFormComponent } from './components/custom-form/custom-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild("mainContainer", { read: ViewContainerRef, static: false })
  vc: ViewContainerRef;
  
  title = 'CustomInputElement';
  propPath = 'app';
  count = 0;

  constructor(private _factory: ComponentFactoryResolver,
    private cdRef: ChangeDetectorRef){
  }

  makeNewForm(){
    
    let name = "form";
    this.count++;
    name = name+this.count;
    console.log("form added - "+name);
    const factory = this._factory.resolveComponentFactory(CustomFormComponent);
    const componentRef1 = this.vc.createComponent(factory);
    let instance = <CustomFormComponent>componentRef1.instance;
    instance.propPath = this.propPath+"."+name;
    this.cdRef.detectChanges();
  }
}
