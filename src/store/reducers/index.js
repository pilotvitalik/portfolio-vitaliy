import {combineReducers} from 'redux';
import MainReducer from "./MainSlice";

const rootReducer = combineReducers({
    main: MainReducer,
})

export default rootReducer;