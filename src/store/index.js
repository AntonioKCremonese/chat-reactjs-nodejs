import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import auth from '../pages/Login/LoginAction';


const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(promiseMiddleware)(createStore)(auth,devTools)

export default store;