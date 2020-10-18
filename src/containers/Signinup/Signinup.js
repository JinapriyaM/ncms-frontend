import React from 'react';

import Card from '../../components/MiscElements/Card';
import Input from '../../components/FormElements/Input';
import Button from '../../components/FormElements/Button';
import './Signup.css';
import { VALIDATOR_MINLENGTH } from '../../components/FormElements/validators';
import { useForm } from '../../components/FormElements/form-hook';



const Signinup = () => {
    const [formState, inputHandler] = useForm({
        email: {
            value: "ddd",
            isValid: false
        },
        password: {
            value: "",
            isValid: false
        }
    }, false);

    const loginHandler = (event) => {
        event.preventDefault();
        console.log(formState.email.value);
        // fetch()
    }


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
            <Button type="submit"  >Login</Button>
        </form>
    </Card>
}
// disabled={!formState.isValid}
export default Signinup;