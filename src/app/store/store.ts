import { createStore } from 'redux-dynamic-reducer';
import {combineReducers} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import {reducer as customInputReducer} from '../components/custom-input/reducer'

const appReducer= (state = {}, action)=>{
    return state;
}
export const store = createStore(combineReducers({
    app: appReducer
}),composeWithDevTools());