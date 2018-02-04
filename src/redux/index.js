import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import api from '../middlewares/api';
import clearTable from '../middlewares/clearTable';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {routerMiddleware} from 'react-router-redux';
import history from '../history';

const enhancer = applyMiddleware(routerMiddleware(history), thunk, api, clearTable/*, logger*/);

const store = createStore(reducer, enhancer);
window.store = store;

export default store;