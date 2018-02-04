import {combineReducers} from 'redux';
import formReg from './formReg';
import softWare from './softWare';
import {routerReducer as router} from 'react-router-redux';

export default combineReducers({
    router, 
    formReg,
    softWare
})