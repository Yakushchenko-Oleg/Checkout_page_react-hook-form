import React, { useEffect, useState } from 'react'
import styles from './form.module.css';
import { useForm } from 'react-hook-form'
import { fetchCountries } from '../utils/requests';

const Form = () => {
    const checkboxText = 'Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.'
    const radioBtnText = 'Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.' 
    const [countriesList, setCountriesList] = useState({})
    // useEffect(()=> {
    // fetchCountries(setCountriesList)})
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitSuccessful,},
        reset,
        getValues,
      } = useForm()

      const checkoutSubmit = (checkoutData) =>{
        console.log(checkoutData);
        reset()
      }

      console.log(errors);
    //   console.log(countriesList[0]);
    
  return (
    <form className={styles.form} onSubmit={handleSubmit(checkoutSubmit)}>
        <div className={styles.form__left_cont}>
            <h2>Billing details</h2>
            <div className={styles.form__name_cont}>
                <div className={styles.form__name_cont}>
                    <label htmlFor="firstName"> First Name </label>
                    <input id="firstName" type="text" 
                        {...register('firstName',
                            {required: "Obligatory field", 
                            minLength: {value: 2, message: "The name must be longer than 2 letters"},
                            pattern: {
                                value: /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/g,
                                message: "Use only Latin characters",},
                    })}/>
                    {
                        errors.firstName&& errors.firstName.message && <p style={{ color: 'red' }}>{errors.firstName.message}</p> 
                    }

                </div>
                <div className={styles.form__name_cont}>
                    <label htmlFor="lastName"> Lasy Name</label>
                    <input id="lastName" type="text" 
                        {...register('lastName',
                        {required: "Obligatory field", 
                        minLength: {value: 2, message: "The surname must be longer than 2 letters"},
                        pattern: {
                            value: /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/g,
                            message: "Use only Latin characters",},
                    })}/>
                    {
                        errors.lastName && errors.lastName.message && <p style={{ color: 'red' }}>{errors.lastName.message}</p> 
                    }
                </div>      
            </div>

            <label htmlFor="companyName"> Company Name (Optional)</label>
            <input id="companyName" type="text" 
            {...register('companyName',
            {pattern: {
                value: /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/g,
                message: "Use only Latin characters",},
        })}/>
                    {
                        errors.companyName && errors.companyName.message && <p style={{ color: 'red' }}>{errors.companyName.message}</p> 
                    }
            
            <label htmlFor="country"> Country / Region </label> 
            <select name="country" id="country">
                
            {
            //   countriesList && countriesList.map(el => <option value={el.name.common}>{el.name.common} </option>)  
            }
            </select>
            <label htmlFor="street"> Street address </label>
            <input id="street" type="text" />
             
            
            <label htmlFor="city"> Town / City </label> 
            <input id="city" type="text"
                                    {...register('city',
                                    {pattern: {
                                        value: /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/g,
                                        message: "Use only Latin characters",},
                                })}/>
                                {
                                    errors.city && errors.city.message && <p style={{ color: 'red' }}>{errors.city.message}</p> 
                                } 
        
{/*  */}
            <label htmlFor="ZIPcode"> ZIP code </label> 
            <input id="ZIPcode" type="number"                                    
                {...register('ZIPcode',
                    {pattern: {
                        value: /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/g,
                         message: "Use Germany ZIP co",},
                    })}/>
                {
                    errors.ZIPcode && errors.ZIPcode.message && <p style={{ color: 'red' }}>{errors.ZIPcode.message}</p> 
                } 
            
            <label htmlFor="phone"> Phone </label> 
            <input id="phone" type="tel"                                     
                {...register('phone',
                    {pattern: {
                        value: /\(?\+\(?49\)?[ ()]?([- ()]?\d[- ()]?){10}/g,
                         message: "Use Germany telefon",},
                    })}/>
                {
                    errors.phone && errors.phone.message && <p style={{ color: 'red' }}>{errors.phone.message}</p> 
                }    
            
            <label htmlFor="email"> Email address</label> 
            <input id="email" type="email"                                     
                {...register('email',
                    {pattern: {
                        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                         message: "Enter your email address correctly",},
                    })}/>
                {
                    errors.email && errors.email.message && <p style={{ color: 'red' }}>{errors.email.message}</p> 
                }       

            <input 
            id="Additional_information" 
            type="text" 
            placeholder="Additional information"
            />       

        </div>
        <div className={styles.form__right_cont}>
            <div className={styles.form__right__string_wraper}>
                <h3>Product</h3>
                <h3>Subtotal</h3>
            </div>
            <div className={styles.form__right__string_wraper}>
                <h5>Asgaard sofa x 1</h5>
                <h5>Rs. 250,000.00</h5>

            </div>
            <div className={styles.form__right__string_wraper}>
                <h5> Subtotal</h5>
                <h5>Rs. 250,000.00</h5>               
            </div>
            <div className={styles.form__right__string_wraper}>
                <h5>Total</h5>
                <h2> <span>Rs. 250,000.00</span></h2>
            </div>
            <div className={styles.form__right__checkbox_wraper}>
                <label>
                    <input
                    type="checkbox"
                    // checked={checked}
                    // onChange={handleChange}
                    />
                    Direct Bank Transfer
                </label>
                <p> {checkboxText}</p>
            </div>

            <div className={styles.form__right__checkbox_wraper}>
                <label>
                    <input 
                        type='radio' 
                        name="paymend_option" 
                        value="banc" 
                        defaultChecked>
                    </input>
                    Direct Bank Transfer</label>
                <label>
                    <input 
                        type='radio' 
                        name="paymend_option" 
                        value="cash">
                    </input>
                Cash On Delivery</label>
                <p>{radioBtnText}</p>
            </div>

            <button>Place order</button>
            {
                <p>{isSubmitSuccessful && "Your checkout successful"}</p>
            }

        </div>
        
    </form>
  )
}

export default Form
