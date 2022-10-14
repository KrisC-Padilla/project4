import { useEffect, useState } from "react";
import Validate from "./Validate";


const useForm =(callback, Validate) =>{
  const [initialValues, setInitialValues] = useState ({
      username: '',
      email:'',
      password:'',
      password2:''
  });

  const [errors, setErrors] = useState({});
  const [onSubmit, setOnSubmit] = useState(false);


  const handleChange = e =>{
    const {name, value} = e.target;
    setInitialValues({
        ...initialValues, [name]:value
    });
  };

   const handleSubmit = e =>{
    e.preventDefault();
    setErrors(Validate(initialValues));
    setOnSubmit(true);
   };
   
   useEffect (() =>{
     if(Object.keys(errors).length === 0 && onSubmit){
        callback();
     }
   }, [errors]);

   return { handleChange, initialValues, handleSubmit, errors };
};

export default useForm;