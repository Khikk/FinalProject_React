
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../../UI/Button/Button";
import { Link, NavLink } from "react-router-dom";
import { fetchSaleProducts } from "../../asyncActions/productList";
import s from './SalesBlock.module.css'
import { base_url } from "../..";
import { addToCart } from "../../asyncActions/cart";
function SalesBlock() {

  const productInfo = useSelector((store) => store.productInfo);
  const dispatch = useDispatch();
  const { productList } = useSelector((store) => store.productList);

  useEffect(() => {
    dispatch(fetchSaleProducts());
  }, []);


  const handleAddToCart = () => {
    dispatch(addToCart({
      id: productInfo.id,
      name: productInfo.title,
      price: productInfo.discont_price !== null ? productInfo.discont_price : productInfo.price,
      image: productInfo.image
    }));
  };

  const discountedProducts = productList.filter(
    (elem) => elem.discont_price !== null
  );
  const sortedDiscountedProducts = discountedProducts
    .sort((a, b) => b.discont_price - a.discont_price)
    .slice(0, 4);

  const handleNavLinkClick = (event, id) => {
    console.log(`NavLink clicked for product with id ${id}`);
  };

  return (
    <div id="SalesBlock" className={s.sales_main}>
      <div className={s.navigate_sales}>
        <h1 className={s.title_sales}>Sale</h1>
        <div className={s.navigate_sales_btn}>
          <Link to="/products/sale">
            <Button theme="link_to" title="all sales >" 
            />
          </Link>
        </div>
      </div>
      <div className={s.sales_grid_main}>
        {sortedDiscountedProducts.map((elem) => (
          <NavLink
            key={elem.id}
            to={`/products/${elem.id}`}
            onClick={(event) => handleNavLinkClick(event, elem.id)}
            className={s.sales_card_link}
          >
            <div key={elem.id} className={s.sales_card_main}>
              <img
                className={s.sales_card_image}
                src={(base_url) + '/' + elem.image}
                alt={elem.title}
              />
              {elem.discont_price !== null && (
                <div className={s.discount_tag}>
                  {Math.round((1 - elem.discont_price / elem.price) * 100)}%
                </div>
              )}
              <div className={s.overlay_main}>
                <Button
                  onClick={handleAddToCart}
                  theme="green"
                  title="Add to cart"
                />
              </div>
              <p className={s.sales_card_title}>{elem.title}</p>
              <div className={s.sales_card_price}>
                <p className={s.discounted_price}>${elem.discont_price}</p>
                <p className={s.original_price}>${elem.price}</p>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default SalesBlock;













