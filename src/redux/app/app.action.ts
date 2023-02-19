import {UseAppDispatch, UseDispatch} from '../store'
import * as types from './app.actionTypes'
import { fetchProductData, fetchProductDataItem } from './app.api';

export const getRequest = ():any => async(dispatch:UseDispatch)=>{
    dispatch({type:types.APP_LOADING});

    try {
        let data = await fetchProductData();
        dispatch({type:types.APP_GET_DATA, payload:data})
    } catch (error) {
        dispatch({type:types.APP_ERROR})
    }
}

export const getRequestItem = (id:string):any => async(dispatch:UseDispatch)=>{
    dispatch({type:types.APP_LOADING});

    try {
        let data = await fetchProductDataItem(id);
        dispatch({type:types.APP_GET_DATA, payload:data})
    } catch (error) {
        dispatch({type:types.APP_ERROR})
    }
}