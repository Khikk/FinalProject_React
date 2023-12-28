import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import s from './Sort.module.css'
import { defaultSortAction, sortFromPriceAction, sortByNameAction, sortToPriceAction, sortSaleAction } from "../../store/productListReducer"
import { fetchFilterProducts } from "../../asyncActions/productList"

function Sort(){
    const productList = useSelector((store) => store.productList)
    const dispatch = useDispatch()
    const [sortType, setSortType] = useState()
    const [minPrice, setMinPrice] = useState('') 
    const [maxPrice, setMaxPrice] = useState('') 
  
    
    function checkBoxHandler(e){
        dispatch(sortSaleAction(e.target.checked))
    }

    useEffect(() => {
      dispatch(fetchFilterProducts()); 
    }, [dispatch])

    useEffect(() => {
        if (minPrice !== '' && maxPrice !== '') {
            formHandler(minPrice, maxPrice);
        }
    }, [minPrice, maxPrice]);
    
    const formHandler = (min, max) => {
        const parsedMin = parseInt(min);
        const parsedMax = parseInt(max);
        if (!isNaN(parsedMin) && !isNaN(parsedMax)) {
            dispatch(sortToPriceAction({ min: parsedMin, max: parsedMax, productList }));
        }
    }

    const handleSortChange = (elem) => {
        const selectedSortType = e.target.value;
        setSortType(selectedSortType);
        switch (selectedSortType) {
            case "name":
                dispatch(sortByNameAction());
                break;
            case "price":
                dispatch(sortFromPriceAction());
                break;
            default:
                dispatch(defaultSortAction());
                break;
        }
    }

    const handleMinPriceChange = (elem) => {
        setMinPrice(elem.target.value);
    }

    const handleMaxPriceChange = (elem) => {
        setMaxPrice(elem.target.value);
    }

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.sort_container}>
                    <form className={s.form_min_max}>
                        Price 
                        <input type="text" name="min" placeholder="from" className={s.price_input} onChange={handleMinPriceChange} />
                        <input type='text' name="max" placeholder="to" className={s.price_input} onChange={handleMaxPriceChange} />
                    </form>
                </div>
                <div className={s.sort_container}>
                    <label>Discounted items</label>
                    <input onClick={checkBoxHandler} type="checkbox" />
                </div>
                <div className={`${s.sort_container} ${s.sort}`}>
                    <label> Sorted </label>
                    <select value={sortType} onChange={handleSortChange} className={s.select_sort}>
                        <option value="default">Default</option>
                        <option value="name">Sort by Name</option>
                        <option value="price">Sort by Price</option>
                    </select>
                </div>
            </div>
            </div>    
      )
}

export default Sort
