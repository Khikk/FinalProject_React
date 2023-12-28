import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { fetchCategoriesAll, fetchCategoryById } from "../../asyncActions/categoriesList"
import Button from "../../UI/Button/Button"
import { base_url } from "../.."
import s from './CategoriesAll.module.css'
import Category from "../Category/Category"

function CategoriesAll({items, button, type}){
    

    const categoriesList = useSelector((store) => store.categoriesList)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    useEffect(() => {
        dispatch(fetchCategoriesAll())
    }, [])


    const handleCategoryClicker = (id) => {
        dispatch(fetchCategoryById(id))
        navigate(`/category/${id}`)
    }

    return(
        <div className={s.wrapper}>
            <div className={s.navigate}>
                <h2 className={s.title_categories}>Categories</h2>

                <div className={s.click_categories}>
                {(button) ? 
                        <Link to={'/categories/all'}> 
                            <Button title='All categories >' theme='navigation'/>
                        </Link> : null}
                </div>
            </div>

            <div className={s.container}>
            {categoriesList.slice(0, items ?? categoriesList.length).map(elem =>
                <div onClick={() => handleCategoryClicker(elem.id)} key={elem.id}>
                        <Category
                                id={elem.id}
                                image={(base_url) + elem.image}
                                title={elem.title}/>         
                </div>)}
         </div>
        </div>
    )
}

export default CategoriesAll