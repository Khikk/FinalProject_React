import {ReactComponent as BasketLogo} from '../../images/basket.svg'
import s from './BasketHeader.module.css'

function CartHeader() {

  return (
    <div className={s.basket_logo}>
      <BasketLogo/>
    </div>
  )
}

export default CartHeader



