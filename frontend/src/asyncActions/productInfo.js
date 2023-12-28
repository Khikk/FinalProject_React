import { base_url } from ".."
import { ProductInfoAction } from "../store/productInfoReducer"

export function fetchProductInfo(id){
    return function(dispatch){
        fetch(base_url+ '/products/'+id)
        .then(res => res.json())
        .then(data => dispatch(ProductInfoAction(data)))
    }
}