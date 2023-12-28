import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import s from './ProductsItem.module.css'
import HoverButton from "../../UI/HoverButton/HoverButton"
import { useDispatch } from "react-redux"
import { addToCart } from "../../asyncActions/cart"





function ProductsItem({id, title, image, price, discont_price}){

    const [active, setActive] = useState(false)
    const dispatch = useDispatch()


    return (
        <Link to={`/products/${id}`}>
            <div className={s.card_product}
                    onMouseEnter={() => setActive(true)}
                    onMouseLeave={() => setActive(false)}>  

            <div style={{backgroundImage: `url(${image})`}} className={s.product_img}>
                    {discont_price !== null && (
                        <div className={s.discount_icon}>
                            {Math.round((1 - discont_price / price) * 100)}%
                        </div>)}
                    <HoverButton 
                    active={active} 
                    setActive={setActive} 
                    dispatch={dispatch} 
                    addToCart={addToCart} 
                    productInfo={{ id, title, price, discont_price, 
                     image }}/>
            </div>

            <div className={s.product_descr}>
            <div className={s.product_title}>{title}</div>
            {discont_price ? (<div className={s.product_card_prices}>
                                        <h3 className={s.product_discount_price}>${discont_price}</h3> 
                                        <h3 className={s.product_real_price}>${price}</h3>
                                    </div>) 
                                    : 
                                    (<div>
                                        <h3 className={s.product_discount_price}>${price}</h3>
                                    </div>)}
                    </div>
            </div>
        </Link>
  )}
export default ProductsItem

