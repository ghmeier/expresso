import {combineReducers} from 'redux';

import {beans} from './warehouseReducer';
import { roasterReducer } from './roasterReducer';
import { userReducer } from './userReducer';
import { customerPaymentInfoReducer } from './coinageReducer';
import { triggers, contents, receipts } from './bloodlinesReducer';
import { subscriptionReducer } from './covenantReducer';

import ReducerUtil from './reducerUtil';

const rootReducer = combineReducers({
    roasterReducer,
    userReducer,
    customerPaymentInfoReducer,
    beans,
    triggers,
    contents,
    receipts,
    subscriptionReducer,
    modify: ReducerUtil.modify
});

export default rootReducer;
