import { Cart, Product } from "@/utils/productUtil";
import * as types from './cart.actionTypes'

interface CartState{
    isLoading:boolean, 
    isError:boolean,
    cartData:Cart[]
}
interface CartAction{
    type:string,
    payload?:any
}

const init = {
    isLoading:false, 
    isError:false,
    cartData:[]
}



export function reducer (state:CartState=init, action:CartAction):CartState{
    const {type, payload} = action;

    switch (type) {
        case types.CART_ERROR:
            return {...state, isLoading:false, isError:true}

        case types.CART_LOADING:
            return {...state, isLoading:true, isError:false}

        case types.CART_GET_DATA:
            return {...state, cartData:payload, isLoading:false, isError:false}
    
        case types.CART_POST_DATA_ITEM:
            return {...state, cartData:[...state.cartData, payload], isLoading:false, isError:false}
        default:
            return state;
    }
}