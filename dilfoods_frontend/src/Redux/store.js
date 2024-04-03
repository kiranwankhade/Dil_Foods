import { legacy_createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import { chartReducer } from './chartdata/chartdata.reducer';


const rootReducer = combineReducers({
    chartData:chartReducer
  });

const store = legacy_createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;