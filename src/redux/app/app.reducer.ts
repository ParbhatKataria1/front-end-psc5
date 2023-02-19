import { Product } from "@/utils/productUtil";
import * as types from './app.actionTypes'

interface AppState{
    isLoading:boolean, 
    isError:boolean,
    appData:Product[]
}
interface AppAction{
    type:string,
    payload?:any
}

const init = {
    isLoading:false, 
    isError:false,
    appData:[]
}



export function reducer (state:AppState=init, action:AppAction):AppState{
    const {type, payload} = action;

    switch (type) {
        case types.APP_ERROR:
            return {...state, isLoading:false, isError:true}

        case types.APP_LOADING:
            return {...state, isLoading:true, isError:false}

        case types.APP_GET_DATA:
            return {...state, appData:payload, isLoading:false, isError:false}
    
        default:
            return state;
    }
}