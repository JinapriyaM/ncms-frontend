import React from 'react';

import Card from '../../components/MiscElements/Card';
import Input from '../../components/FormElements/Input';
import Button from '../../components/FormElements/Button';
import './Signup.css';
import {  VALIDATOR_MINLENGTH } from '../../components/FormElements/validators';
import {useForm} from '../../components/FormElements/form-hook';

const loginHandler = async (event) => {
    event.preventDefault();
    console.log()
    fetch()
}


const Signinup = () => {
    const [formState, inputHandler] = useForm({
        email: {
            value: "",
            isValid: false
        },
        password: {
            value: "",
            isValid: false
        }
    }, false);

    return <Card className="authentication">
        <h2>Login</h2>
        <hr />
        <form onSubmit={loginHandler}>
            <Input 
                element="input" 
                id="text" 
                type="test" 
                label="Username" 
                errorText="Invalid Email"
                validators={[VALIDATOR_MINLENGTH(5)]}
                onInput={inputHandler} />
            <Input 
                element="input" 
                id="password" 
                type="password" 
                label="password" 
                errorText="Invalid Password"
                validators={[VALIDATOR_MINLENGTH(5)]}
                onInput={inputHandler} />
            <Button type="submit" disabled={!formState.isValid}>Login</Button>
        </form>
    </Card>
}

export default Signinup;