
import { useState } from "react";
import {useForm} from "react-hook-form";
import { loginUser } from "../../api/user"; 
import{ useHistory} from 'react-router-dom'

const usernameConfig = {
    minLength: 3,
    required: true,
    pattern: /^[a-z]+$/i
}

const LoginForm = () => {
    const{
        register,
        handleSubmit,
        formState: {errors},

    }=useForm();

    // Local state
    const [loading, setLoading] = useState(false);
   
   // Event Handlers
    const onSubmit = async ({username}) => {
        setLoading(true);
        const [error, user] = await loginUser(username);
        console.log('Error:',error);
        console.log('User:',user);
        setLoading(false);
    };
    console.log(errors);
    
   

    // Render Functions
    const errorMessage = (() => {
        if (!errors.username) {
            return null;
        }
    
        if (errors.username.type === 'required') {
            return <span>"User name is required"</span>
        }
        if (errors.username.type === 'minLength') {
            return <span>User name is too short </span>
        }
    })();

    return (
        <>
        <h2>what is your name</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
                <label htmlFor="username">Username:</label>
                <input type="text" 
                placeholder='jahandoe'
                {...register("username", usernameConfig)}
                />
                {errorMessage}
            </fieldset>
            <button type= "submit" disabled={loading}>Continue</button>
        </form>
        </>
    );
};

export default LoginForm;