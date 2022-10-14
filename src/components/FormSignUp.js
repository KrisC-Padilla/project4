import React from 'react';
import useForm from './useForm';
import Validate from './Validate';
import '../styles/Form.css';


const FormSignUp = ({submitForm}) => {
  const {handleChange, initialValues, handleSubmit, errors} = useForm(submitForm, Validate);

  return (
    <div className='form-content'>
        <form className='form' onSubmit={handleSubmit}>
            <h1>
                Register with us! 
            </h1>   
            <p>Create your account by filling out the information below.</p>
            <br></br>
            <div className='form-inputs'>
                <label htmlFor='username' className='form-label'>
                    Username
                </label>
                <input type='text' name='username' 
                       id='username'
                       className='input-un' 
                       placeholder='Enter your username'
                       value={initialValues.username}
                       onChange={handleChange}
                />
                {errors.username && <p>{errors.username}</p>}
            </div>

            <div className='form-inputs'>
                <label className='form-label'>Email</label>
                <input type='email'  name='email'
                       id='email'
                       className='email'
                       placeholder='Enter your email'
                       value={initialValues.email}
                       onChange={handleChange}
                />
                {errors.email && <p>{errors.email}</p>}
            </div>

            <div className='form-inputs'>
                <label htmlFor='password' className='form-label'>
                    Password
                </label>
                <input type='password' name='password' 
                       id='password'
                       className='input-pw' 
                       placeholder='Enter your password'
                       value={initialValues.password}
                       onChange={handleChange}
                />
                {errors.password && <p>{errors.password}</p>}
            </div>
           
            <div className='form-inputs'>
                <label htmlFor='password2' className='form-label'>
                    Confirm Password
                </label>
                <input type='password' name='password2'
                       id='password2'
                       className='input-pw2' 
                       placeholder='Confirm Password'
                       value={initialValues.password2}
                       onChange={handleChange}
                />
                {errors.password2 && <p>{errors.password2}</p>}
            </div>
            <button className='submit-bttn' type='submit'>Sign Up</button>
            <span className='form-input-login'>Already have an account? 
                  Log in <a href='#'>here</a>
            </span>
        </form>
    </div>
  )
}

export default FormSignUp;