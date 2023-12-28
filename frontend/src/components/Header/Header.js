import { Link } from "react-router-dom"
import {ReactComponent as Logo} from '../../images/logo.svg'
import s from './Header.module.css'

import CartHeader from "../BasketHeader/BasketHeader"


function Header() {

  return(
    <header className={s.header}>
      <div className={s.menu_wrapper}>
        <Link to={'/'} className={s.logo}>
          <Logo className={s.logo}/>
        </Link>
     
        <nav className={s.menu}>
        <div className={s.navigation}>
                <Link to={"/"}>
                    <h2>Main Page</h2>
                </Link>
                <Link to={"/categories/all"}>
                    <h2>Categories</h2>
                </Link>
                <Link to={"/products/all"}>
                    <h2>All products</h2>
                </Link>
                <Link to={"/products/sale"}>
                    <h2>All sales</h2>
                </Link>
            </div>
        </nav>
      
        <Link to={'/cart'}>
          <CartHeader className={s.cart_head}/>
        </Link>
      </div>
    </header> 
  )
}

export default Header