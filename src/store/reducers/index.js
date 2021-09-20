import {combineReducers} from 'redux';

import defaultReducer from './defaultSlice';

const rootReducer = combineReducers({
    num: defaultReducer,
})

export default rootReducer;