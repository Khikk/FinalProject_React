import s from './Button.module.css';

function Button(props){

    const {title, theme, onClick, ...otherProps} = props;

    return(
        <button
            {...otherProps}
            className={`${s.btn_elem} ${s[theme]}` }
            onClick={onClick} 
        >
            {title}
        </button>
    );
}

export default Button;
