import {combineReducers} from "redux";
import reducer from "./priceReducer";
import categoryReducer from './categoryReducer';

const reducers=combineReducers({
    price:reducer,
    category:categoryReducer,
})
export default reducers;