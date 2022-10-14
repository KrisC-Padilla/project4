

export default function Validate(initialValues){
    let errors ={}

         
    if(!initialValues.username.trim()){
        errors.username ='Username is required';
    }

    if (!initialValues.email) {
        errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(initialValues.email)) {
        errors.email = 'Email address is invalid';
    }

    if (!initialValues.password) {
        errors.password = 'Password is required';
    }else if (initialValues.password.length < 8) {
        errors.password = 'Password needs atleast 8 characters';
    }else if (initialValues.password.search(/[a-z]/) < 0) {
        errors.password = 'Password needs atleast one lowercase letter';
    }else if (initialValues.password.search(/[A-Z]/) < 0) {
        errors.password = 'Password needs atleast one uppercase letter';
    }else if (initialValues.password.search(/[0-9]/) < 0) {
        errors.password = 'Password needs atleast one number';
    }else if (initialValues.password.search(/[!@#$%^&*()_+.,;:-]/) < 0) {
        errors.password = 'Password needs atleast one special character';
    }
    
    if(!initialValues.password2){
        errors.password = 'Password is required';
    } else if(initialValues.password2 !== initialValues.password){
        errors.password2 = 'Passwords do not match';
    }

    return errors;
}