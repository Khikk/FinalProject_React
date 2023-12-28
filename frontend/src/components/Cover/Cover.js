import React from 'react';
import { Link } from "react-scroll";
import BackCover from "../../images/main.svg";
import Button from '../../UI/Button/Button';
import s from './Cover.module.css'
function Cover() {
  return (
    <div className={s.cover_content}>
      <div style={{backgroundImage: `url(${BackCover})`}} className={s.main}>
      <div className={s.overtext_cover}>
        <p>Amazing Discounts</p>
        <p>on Garden Products!</p>
        <div>
          <Link to="SalesBlock" smooth={true} duration={800}>
            <Button theme="green" title="Check out" className={s.btn_cover}/>
          </Link>
        </div>
      </div>
      </div>

    </div>
  );
}

export default Cover;