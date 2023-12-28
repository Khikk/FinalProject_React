import s from './NotFoundPage.module.css'
import Error from '../../images/404.svg'
import CactusError from '../../images/cactus.svg'
import { useNavigate } from 'react-router-dom'
import Button from '../../UI/Button/Button'



function NotFoundPage(){

    let navigate = useNavigate()

    return(
        <div className={s.wrapper}>
            <div className={s.img}>
                <img className={s.img_error} src={Error}/>
                <img className={s.img_error} src={CactusError}/>
                <img className={s.img_error} src={Error}/>
            </div>
            <div className={s.text}>
                <h2 className={s.main_text}>Page Not Found</h2>
                <p>We’re sorry, the page you requested could not be found. <br/>Please go back to the homepage.</p>
            </div>

            <Button onClick={() => navigate('/')} title='Go Home' theme='green'/>
        </div>
    )
}

export default NotFoundPage