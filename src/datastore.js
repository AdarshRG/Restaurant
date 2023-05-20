import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { restReducer } from "./constatnts/reducer/rReducer";


//create reducer
const reducer=combineReducers({
    reducer1:restReducer

})
//middleware creation
const middleware=[thunk]

//                      reducer.middleware
const store=createStore(reducer,applyMiddleware(...middleware))

export default store