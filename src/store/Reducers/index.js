import {combineReducers} from "redux";
import reducer from "./priceReducer";
import categoryReducer from './categoryReducer';
import eventReducer from './eventReducer';

const reducers=combineReducers({
    price:reducer,
    category:categoryReducer,
    event:eventReducer,
})
export default reducers;