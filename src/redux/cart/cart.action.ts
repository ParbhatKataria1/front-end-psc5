import {UseAppDispatch, UseDispatch} from '../store'
import * as types from './cart.actionTypes'
import { fetchCartData, PostCartDataItem } from './cart.api';

export const getCartRequest = ():any => async(dispatch:UseDispatch)=>{
    dispatch({type:types.CART_LOADING});

    try {
        let data = await fetchCartData();
        dispatch({type:types.CART_GET_DATA, payload:data})
    } catch (error) {
        dispatch({type:types.CART_ERROR})
    }
}

export const getCartPostItem = (quantity:number, productId:number):any => async(dispatch:UseDispatch)=>{
    dispatch({type:types.CART_LOADING});

    try {
        let data = await PostCartDataItem(quantity, productId);
        dispatch({type:types.CART_POST_DATA_ITEM, payload:data})
    } catch (error) {
        dispatch({type:types.CART_ERROR})
    }
}