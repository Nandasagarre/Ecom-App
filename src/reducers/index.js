import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import { ProductReducers } from './productsArray';
import  CartArray  from './cartArray';

const rootReducer = combineReducers({
    form: formReducer,
    ProductReducers,
    CartArray: CartArray
});

export default rootReducer;