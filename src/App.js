import { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FormInput from './Component/FormInput';
import './App.css';

export default function App(){
    // to take data use Hooks, we can pass a function like props immediately, useRef sert à detecter la reference de l'objet en question    
    // const data  =  new FormData(e.target)
    // console.log(Object.fromEntries(data.entries()))


    const [values, setValues] = useState({
        username: "",
        email: "",
        birthday: "",
        password: "",
        confirmPassword: ""
    })
    
    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "Username",
            errorMessage: "Username should be 3-16 characters and shouldn't include special character",
            label: "Username",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true
        },
        {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "Email",
            errorMessage: "It should be a valid email address",
            label: "Email",
            required: true
        },
        {
            id: 3,
            name: "birthday",
            type: "date",
            placeholder: "Birthday",
            errorMessage: "",
            label: "Birthday"
        },
        {
            id: 4,
            name: "password",
            type: "password",
            placeholder: "Password",
            errorMessage: "Password should be 8-20 characters and should include at least 1 letter, 1 number, 1 special character",
            label: "Password",
            pattern: '^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$',
            required: true
        },
        {
            id: 5,
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirm Password",
            errorMessage: "Password don't match",
            label: "Confirm Password",
            pattern: values.password,
            required: true
        }
    ]

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }


    return (
        <div className='app'>
            <form onSubmit={handleSubmit}>
                <h1>Register</h1>

                { inputs.map((input) => (
                    <FormInput  key={input.id} {...input} value={values[input.name]} onChange={onChange} />
                )) }

                <button>Submit</button>
            </form>
        </div>
    )
}