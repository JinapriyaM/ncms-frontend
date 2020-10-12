import React from 'react';

import Card from '../../components/MiscElements/Card';
import Input from '../../components/FormElements/Input';
import Button from '../../components/FormElements/Button';
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_MIN } from '../../components/FormElements/validators';
import {useForm} from '../../components/FormElements/form-hook';
import './Register.css';

const registerHandler = (event) => {
    event.preventDefault();
    console.log()
} 

const Register = () => {
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
        <h2>Register</h2>
        <hr />
        <form onSubmit={registerHandler}>
            <Input 
                element="input" 
                id="firstname" 
                type="text" 
                label="First Name" 
                errorText="Wrong name"
                validators={[VALIDATOR_MIN(5)]}
                onInput={inputHandler} />
            <Input 
                element="input" 
                id="lastname" 
                type="text" 
                label="Last Name" 
                errorText="Wrong name"
                validators={[VALIDATOR_MIN(5)]}
                onInput={inputHandler} />
            <Input 
                element="input" 
                id="district" 
                type="text" 
                label="District" 
                errorText="Wrong"
                validators={[VALIDATOR_MIN(3)]}
                onInput={inputHandler} />
            <Input 
                element="input" 
                id="locationX" 
                type="number" 
                label="Location X" 
                errorText="Wrong cordinate"
                step="0.01"
                validators={[VALIDATOR_MIN(8)]}
                onInput={inputHandler} />
            <Input 
                element="input" 
                id="locationY" 
                type="number" 
                label="Location Y" 
                errorText="Wrong"
                step="0.01"
                validators={[VALIDATOR_MIN(8)]}
                onInput={inputHandler} />
            <Input 
                element="input" 
                id="email" 
                type="email" 
                label="Email" 
                errorText="Invalid Email"
                validators={[VALIDATOR_EMAIL()]}
                onInput={inputHandler} />
            <Input 
                element="input" 
                id="password" 
                type="password" 
                label="password" 
                errorText="Invalid Password"
                validators={[VALIDATOR_MINLENGTH(5)]}
                onInput={inputHandler} />
            <Button type="submit" disabled={!formState.isValid}>Register</Button>
        </form>
    </Card>
}

export default Register;