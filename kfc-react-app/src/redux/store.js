import {legacy_createStore as createstore,applyMiddleware,combineReducers,compose} from "redux"
import { cartReducer } from "./guddu/cartRedux/CartReducer"



const rootReducer = combineReducers(cartReducer)

export const store = createstore(rootReducer)