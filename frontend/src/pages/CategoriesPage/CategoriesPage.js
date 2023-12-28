import CategoriesAll from "../../components/CategoriesAll/CategoriesAll"
import s from './CategoriesPage.module.css'
function CategoriesPage(){
    return(
        <div className={s.wrapper}>
            <CategoriesAll type='categories_list_categories'/>
        </div>
    )
}

export default CategoriesPage