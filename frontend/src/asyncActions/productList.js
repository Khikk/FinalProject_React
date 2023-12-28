import { base_url } from ".."
import { AllProductsAction, AllProductsOnSaleAction } from "../store/productListReducer"


export function fetchAllProducts(arg){
    return function(dispatch){
        fetch(base_url +'/products/all')
            .then(res => res.json())
            .then(data => {
                if (arg === 'all'){
                    dispatch(AllProductsAction(data))
                } else if (arg === 'sale'){
                    dispatch(AllProductsOnSaleAction(data))
                }
                
        })
    }

}
export function fetchFilterProducts(arg){
    return function(dispatch){
        fetch(base_url +'/products/all')
            .then(res => res.json())
            .then(data => {

                const productsWithPrices = data.map(product => {
                    const price = product.price; 
                    const discontPrice = product.discont_price; // цена со скидкой, если есть
                    return { ...product, price, discontPrice };
                });
                if (arg === 'all'){
                    dispatch(AllProductsAction(productsWithPrices))
                } else if (arg === 'sale'){
                    dispatch(AllProductsOnSaleAction(productsWithPrices))
                }
                
        })
    }
}


export function fetchSaleProducts(){
    return function(dispatch){
        fetch(base_url + '/products/all')
        .then(res => res.json())
        .then(data => dispatch(AllProductsOnSaleAction(data)))
    }
}
