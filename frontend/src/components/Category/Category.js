import s from './Category.module.css'

function Category({id, image, title}){
    
    return(
        <div key={id} className={s.wrapper}>
            <img src={image} className={s.category_image}/>
            <h3 className={s.category_text}>{title}</h3>
        </div>
    )
}

export default Category