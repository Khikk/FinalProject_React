import BasketInfo from "../../components/BasketInfo/BasketInfo"
import s from './BasketPage.module.css'

function BasketPage(){
    return(
        <div className={s.wrapper}>
           <BasketInfo/>
        </div>
    )
}

export default BasketPage