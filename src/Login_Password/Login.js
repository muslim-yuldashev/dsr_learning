import React, {useState} from 'react';
import './Login.css';
import {Button, Container, Form} from "react-bootstrap";
import {useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
const Login = () => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');


    const navigate = useNavigate();
    function handleClick() {
        navigate("/subscription");
    }

    const dispatch = useDispatch();
    const updateLogin = (login) =>{
        dispatch({type: 'UPDATE_LOGIN', payload: login})
    }
    const updatePassword = (password) =>{
        dispatch({type: 'UPDATE_PASSWORD', payload: password})
    }

    return (
        <Container sm className='credit-container' >
            <div className='approval-border'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Login</Form.Label>
                        <Form.Control onChange={(e)=>{
                        setLogin(e.target.value)}
                        } type="text" placeholder="Enter login" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={(e)=>{
                            setPassword(e.target.value)}
                        } type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control onChange={(e)=>{
                            setConfirm(e.target.value)}
                        } type="password" placeholder="Confirm Password" />
                    </Form.Group>
                    <Button variant="primary" type="button" onClick={()=> {

                        if (login !== login.toLowerCase()){
                            alert('Login must contain only lowercase letters')
                            return
                        }

                        else if(password.length < 5){
                            alert('Password must be at least 5 characters')
                            return
                        }

                        else if (password === password.toLowerCase()){
                            alert("Password should contain at least one capital letter")
                            return;
                        }

                        else if (password.match(/\d+/) === null){
                            alert('Password must contain at least one number');
                            return
                        }

                        else if(confirm !== password){
                            alert('Password is not matching!');
                            return
                        }
                        updateLogin(login);
                        updatePassword(password);
                        handleClick();
                    }}>
                        Next
                    </Button>
                </Form>
            </div>
        </Container>
    );
};

export default Login;