import { Component, OnInit, Input } from '@angular/core';
import {store} from '../../store/store';
import {ACTION_CUSTOM_INPUT_IS_FOCUSSED,ACTION_CUSTOM_INPUT_NOT_FOCUSSED,ACTION_CUSTOM_INPUT_VALUE_CHANGED} from './actions'
import { customInputState } from './customInputState';
import {reducer as customReducer} from './reducer'
import {StateResolver} from '../../store/stateResolver'


@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css']
})
export class CustomInputComponent implements OnInit {
  @Input() label;
  @Input() propPath;
  value:string="";
  displayState;
  constructor() {
   }

  ngOnInit() {
    store.attachReducers({ [this.propPath]:customReducer(this.propPath)});
    store.subscribe(()=>{
      this.updateState();
    });
  }

  CustomInputIsFocussed(){
    store.dispatch(ACTION_CUSTOM_INPUT_IS_FOCUSSED(this.propPath));
  }
  CustomInputIsNotFocussed(){
    store.dispatch(ACTION_CUSTOM_INPUT_NOT_FOCUSSED(this.propPath));
  }
  CustomInputValueChanged(){
    store.dispatch(ACTION_CUSTOM_INPUT_VALUE_CHANGED(this.propPath,this.value));
  }
  
  updateState(){
    this.displayState = StateResolver(this.propPath,store.getState());

    // let temp:string[] = this.propPath.split('.');
    // for(let i=0;i<temp.length;i++){
    //   this.displayState = this.displayState[temp[i]];
    //   console.log(i);
    //   console.log(this.displayState);
    // }
    this.value = this.displayState.value;
  }

}
