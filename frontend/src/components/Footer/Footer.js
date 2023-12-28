import { ReactComponent as Icon_inst } from '../../images/icon_inst.svg'
import { ReactComponent as Icon_wtsup } from '../../images/icon_wtsup.svg'
import s from './Footer.module.css'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div>
        <h2 className={s.title_footer}>Contact</h2>
        <div className={s.footer}>
                <div className={s.right_info}>
                    <div className={s.navigation} style={{marginBottom:'60px'}}>
                        <p>Phone</p>
                        <h3>+7 (499) 350-66-04</h3>
                    </div>
                    <div className={s.navigation} style={{paddingBottom:'0'}}>
                        <p>Address</p>
                        <h3 style={{width:'800px'}}>Dubininskaya Ulitsa, 96, Moscow,<br/> Russia, 115093</h3>
                    </div>
                </div>
                <div className={s.navigation}>
                        <p style={{marginLeft:'16px'}}>Socials</p>
                    <div className={s.icons} style={{marginBottom:'85px'}}>
                        <Link to={'https://www.instagram.com/'}>
                        <Icon_inst/>
                        </Link>
                        <Link to={'https://www.whatsapp.com/?lang=ru_RU'}>
                        <Icon_wtsup/>
                        </Link>
                    </div>
                    <div className={s.navigation}>
                        <p>Working Hours</p>
                        <h3>24 hours a day</h3>
                    </div>
                </div>
                
                <div style={{width:'100px'}}>
                <iframe
                    width="1360px"
                    height="350"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    src="https://maps.google.com/maps?width=1400&amp;height=350&amp;hl=en&amp;q=ITHUB%20moscow+(ITHUB)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                >
                    <a href="https://www.maps.ie/population/"></a>
                </iframe>
            </div>
        </div>
        </div>
    );
}

export default Footer;