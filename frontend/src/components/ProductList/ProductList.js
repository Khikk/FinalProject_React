import { forwardRef } from "react"
import { useSelector } from "react-redux"
import { base_url } from "../.."
import { Link } from "react-router-dom"
import s from './ProductList.module.css'
import Button from "../../UI/Button/Button"
import ProductsItem from "../ProductItem/ProductsItem"
import Sort from "../Sort/Sort"

const ProductList = forwardRef((props, ref) => {
    
    const {button} = props
    const {category_name, productList} = useSelector((store) => store.productList)

    return(
        <div className={s.wrapper}>
            <div className={s.header}>
                <h2 ref={ref} className={s.header_text}>{category_name}</h2>
                
            <div>
                {(button) ? 
                    <div>
                        <Link to={'/products/sale'}> 
                            <Button title='All sales'/>
                        </Link> 
                    </div>
                    : null}
            </div>
        </div>
        <Sort/>
        <div className={s.product_cards_list}>
                {productList.map(elem => 
                    <ProductsItem
                            key={elem.id} 
                            id={elem.id}
                            title={elem.title}
                            image={base_url + elem.image}
                            price={elem.price}
                            discont_price={elem.discont_price}
                    />)}
            </div>
        </div>
    )})

export default ProductList