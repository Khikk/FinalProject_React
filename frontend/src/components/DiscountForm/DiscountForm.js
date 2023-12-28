import s from './DiscountForm.module.css';
import DiscoForm from '../../images/FormImage.png';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
// import Modal from '../Modal/Modal';
import Button from '../../UI/Button/Button';

function DiscountForm() {

  const [active, setActive] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({ mode: 'onSubmit' })

  const inputName = register('name', {
    required: 'Name required',
    pattern: {
      value: /^[A-Za-zА-Яа-яЕЁё]+$/,
      message: 'Only letters in name allowed'
    }
  })

  const inputPhone = register('phone', {
    required: 'Please enter phone number',
    pattern: {
      value: /^[0-9]*$/,
      message: 'Only numbers are allowed in phone number'
    }
  })

  const inputEmail = register('email', {
    required: 'Please enter email',
    pattern: {
      value: /^([A-z])+([0-9-_.])*([A-z0-9-_.])*@([A-z])+([0-9-_.])*([A-z0-9-_.])*[.]([A-z]){2,6}$/,
      message: 'Please enter valid email'
    }
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className={s.wrapper}>
      <div className={s.discount_form_banner}>
        <h2 className={s.header_text}>5% off on the first order</h2>
        <div className={s.form_wrapper}>
          <img src={DiscoForm}/>
          <form className={s.discount_form} onSubmit={handleSubmit(onSubmit)}>
            <div className={s.input_wrapper}>
              <input
                className={s.input_field}
                {...inputName}
                placeholder={errors.name?.message || 'Name'}
              />
              {errors.name && <span className={s.error_message}>{errors.name.message}</span>}
            </div>
            <div className={s.input_wrapper}>
              <input
                className={s.input_field}
                {...inputPhone}
                placeholder={errors.phone?.message || 'Phone Number'}
              />
              {errors.phone && <span className={s.error_message}>{errors.phone.message}</span>}
            </div>
            <div className={s.input_wrapper}>
              <input
                className={s.input_field}
                {...inputEmail}
                placeholder={errors.email?.message || 'Email'}
              />
              {errors.email && <span className={s.error_message}>{errors.email.message}</span>}
            </div>
            {/* <Modal active={active} setActive={setActive} text={'Discount successfully received!'} /> */}
            <Button
              onClick={() => isValid && setActive(true)}
              title="Get a discount"
              theme="white"
              className={s.btn_form}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default DiscountForm
