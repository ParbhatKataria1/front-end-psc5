
import { applyMiddleware, combineReducers, legacy_createStore } from 'redux'
import thunk from 'redux-thunk'

import {reducer as appReducer} from './app/app.reducer'
import {reducer as cartReducer} from './cart/cart.reducer'
import { useDispatch } from 'react-redux'
import { TypedUseSelectorHook, useSelector } from 'react-redux'



let rootReducer = combineReducers({
    appReducer,
    cartReducer
})


export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

export type UseDispatch = typeof store.dispatch;
export type RootElement = ReturnType<typeof store.getState>;

export const UseAppDispatch :()=>UseDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootElement> = useSelector;



