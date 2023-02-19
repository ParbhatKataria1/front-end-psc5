import {Cart, Product} from '../../utils/productUtil'
import axios, {AxiosResponse} from 'axios'

export async function fetchCartData(){
    let data:AxiosResponse<Product[]> = await axios.get('https://dead-teal-capybara-hose.cyclic.app/carts');
    return data.data;
}

export async function PostCartDataItem(quantity:number, productId:number){
    
    let data:AxiosResponse<Product> = await axios.post(`https://dead-teal-capybara-hose.cyclic.app/carts`,{
        quantity,
        productId
    });
    return data.data;
}