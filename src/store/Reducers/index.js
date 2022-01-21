import {combineReducers} from "redux";
import reducer from "./navReducer";


const reducers=combineReducers({
    title:reducer,
})
export default reducers;