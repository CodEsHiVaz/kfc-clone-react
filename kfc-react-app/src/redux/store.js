import {legacy_createStore as createstore,applyMiddleware,combineReducers,compose} from "redux"
import { cartReducer } from "./guddu/cartRedux/CartReducer"



const rootReducer = combineReducers({cartdata:cartReducer})

export const store = createstore(rootReducer)