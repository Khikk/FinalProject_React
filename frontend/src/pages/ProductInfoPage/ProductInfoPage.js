import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../asyncActions/cart";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchProductInfo } from "../../asyncActions/productInfo";
import { base_url } from "../..";
import Button from "../../UI/Button/Button";
import s from './ProductInfoPage.module.css';

function ProductInfoPage() {
  const productInfo = useSelector((store) => store.productInfo);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchProductInfo(id));
  }, [id]);

  const handleAddToCart = () => {
    dispatch(addToCart({
      id: productInfo.id,
      name: productInfo.title,
      price: productInfo.discont_price !== null ? productInfo.discont_price : productInfo.price,
      image: productInfo.image
    }));
  };

  return (
    <div className={s.wrapper}>
      <div className={s.image_container} style={{backgroundImage: `url(${base_url + productInfo.image})`}}></div>
      <div className={s.product_info}>
        <h1 className={s.product_title}>{productInfo.title}</h1>
        <div className={s.product_price_info}>
          <div className={s.product_price_section}>
            {productInfo.discont_price ? (
              <div className={s.product_card_price_field}>
                <h3 className={s.product_card_price_field_price}>${productInfo.discont_price}</h3>
                <h3 className={s.product_card_price_field_initial_price}>${productInfo.price}</h3>
              </div>
            ) : (
              <div><h3 className={s.product_card_price_field_price}>${productInfo.price}</h3></div>
            )}
            {productInfo.discont_price !== null && (
              <div className={s.discount_tag}>
                {Math.round((1 - productInfo.discont_price / productInfo.price) * 100)}%
              </div>
            )}
          </div>
          <Button title='Add to cart' theme='green' onClick={handleAddToCart}/> {}
        </div>
        <h2 className={s.description_title}>Description</h2>
        <p className={s.product_description}>{productInfo.description}</p>
      </div>
    </div>
  );
}

export default ProductInfoPage;
