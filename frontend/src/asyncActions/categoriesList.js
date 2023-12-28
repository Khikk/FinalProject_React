import { base_url } from ".."
import { AllProductsAction, AllProductsOnSaleAction, ProductsByCategoryAction } from "../store/productListReducer"
import { getCategoriesAction } from "../store/categoriesReducer"

export function fetchCategoryById(id){
    return function(dispatch){
        fetch(base_url +'/categories/' +id)
            .then(res => res.json())
            .then(data => dispatch(ProductsByCategoryAction(data)))

    }   

}


export const fetchCategoriesAll = () => {
    return function(dispatch){
        fetch((base_url) +'/categories/all')
            .then(res => res.json())
            .then(data => dispatch(getCategoriesAction(data)))
    }
}