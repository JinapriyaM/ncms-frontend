import React from 'react';
import {Redirect} from 'react-router-dom';

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
    // let formData = new FormData();
    // formData.append("userName", "madushanka");
    // formData.append("password", "123456");

    var details = {
        'userName': 'madushanka',
        'password': '123456'
    };
    
    var formBody = [];
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    

    const loginHandler = (event) => {
        event.preventDefault();
        console.log(formState.email);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            // body: JSON.stringify({ userName: 'madushanka', password: '123456' })
            body: formBody
        };
        fetch('http://localhost:8080/user/login', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data)
            );
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