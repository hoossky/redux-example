import {combineReducers} from "redux";
import counterReducer from "../counter/counter.reducer";
import {userReducers} from "./user.reducer";

const rootReducer = combineReducers({
    userReducers,
    counterReducer
})

export default rootReducer