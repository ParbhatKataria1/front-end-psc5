import {Product} from '../../utils/productUtil'
import axios, {AxiosResponse} from 'axios'

export async function fetchProductData(){
    let data:AxiosResponse<Product[]> = await axios.get('https://dead-teal-capybara-hose.cyclic.app/products');
    return data.data;
}

export async function fetchProductDataItem(id:string){
    let data:AxiosResponse<Product> = await axios.get(`https://dead-teal-capybara-hose.cyclic.app/products/${id}`);
    return data.data;
}