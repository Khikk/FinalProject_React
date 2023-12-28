import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoriesAll } from "../../asyncActions/categoriesList";
import { Link } from "react-router-dom";
import Button from "../../UI/Button/Button";
import { base_url } from "../..";
import s from './HomeCategories.module.css'


function HomeCategories() {
  const categoriesList = useSelector((store) => store.categoriesList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesAll());
  }, [dispatch]);


  const CutCategories = categoriesList.slice(0, 4)

  return (
    <div className={s.wrapper}>
      <div className={s.navigate}>
        <h2 className={s.title_categories}>Categories</h2>
        <div className={s.click_categories}>
        <Link to={'/categories/all'}>
        <Button theme='link_to' title='all categories >'/>
        </Link>
        </div>
        </div>
        <div className={s.container}>
        {CutCategories.map((elem) => (
          <Link key={elem.id} to={`/category/${elem.id}`}>
          <div key={elem.id} className={s.categories_img}>
            <img src={(base_url) +elem.image} width={315} height={350} alt="photo"/>
            <p>{elem.title}</p>
          </div>   
          </Link>      
        ))}   
      </div>
    </div>
  );
}

export default HomeCategories;