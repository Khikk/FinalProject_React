import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchAllProducts } from "../../asyncActions/productList"
import { useLocation, useParams } from "react-router-dom"
import { fetchCategoryById } from "../../asyncActions/categoriesList"
import { base_url } from "../.."
import ProductList from "../../components/ProductList/ProductList"
import Sort from "../../components/Sort/Sort"



function ProductListPage({type}){

    const {category_name, productList} = useSelector(store => store.productList)
    const dispatch = useDispatch()
    const location = useLocation()
    const {id} = useParams()

    useEffect(() =>{
        if (type !== 'category'){
            dispatch(fetchAllProducts(type))
        } else{
            dispatch(fetchCategoryById(id))
        }
        
    }, [location.pathname])

    return(
        <div>
          <ProductList/>
        </div>
    )
}

export default ProductListPage