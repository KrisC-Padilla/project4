import FormSuccess from './FormSuccess';
import FormSignUp from './FormSignUp';
import { useState } from 'react';
import '../styles/Form.css';

const Form = () => {
  const [isSubmitted, setIssubmitted] = useState(false);

  const submitForm = () =>{
    setIssubmitted(true);
  }
    
  return (
    <div className='form-container'>
        {!isSubmitted ? <FormSignUp submitForm=
        {submitForm}/> : <FormSuccess />}
    </div>
  );
};

export default Form;