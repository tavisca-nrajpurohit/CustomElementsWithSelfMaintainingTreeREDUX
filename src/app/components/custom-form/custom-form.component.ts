import { Component, OnInit, Input } from '@angular/core';
import {store} from '../../store/store'
import {reducer as formReducer} from './reducer'

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.css']
})
export class CustomFormComponent implements OnInit {
  @Input() propPath:string;
  formName:string="";
  constructor() { }

  ngOnInit() {
    store.attachReducers({ [this.propPath]:formReducer(this.propPath)});
    let formNameArray = this.propPath.split('.');
    this.formName = formNameArray[formNameArray.length-1]
  }

}
