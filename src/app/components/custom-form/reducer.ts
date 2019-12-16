import { customFormState } from './customFormState';

const initialState: customFormState = {
        isSubmitted : false
};

export const reducer = (propPath) => (state = initialState, action)=>{
    switch(action.type){
        default:
            return state;
    };
}