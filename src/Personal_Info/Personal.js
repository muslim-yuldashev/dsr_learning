import React, {useState} from 'react';
import './Personal.css';
import {Button, Container, Form, FormGroup} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

const Personal = () => {

    const navigate = useNavigate();
    function handleClick() {
        navigate("/credit_card");
    }

    const[fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [mName, setMName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [isOver18, setIsOver18] = useState(false);


    const dispatch = useDispatch();
    const updateFirstName = () => {
        dispatch({type: 'UPDATE_FIRST_NAME', payload: fName})
    }
    const updateLastName = () => {
        dispatch({type: 'UPDATE_LAST_NAME', payload: lName})
    }
    const updateMiddleName = () => {
        dispatch({type: 'UPDATE_MIDDLE_NAME', payload: mName})
    }
    const updateBirthDate = () => {
        dispatch({type: 'UPDATE_BIRTHDATE', payload: birthDate})
    }
    const updateEmail= () => {
        dispatch({type: 'UPDATE_EMAIL', payload: email})
    }
    const updateGender = () => {
        dispatch({type: 'UPDATE_GENDER', payload: gender})
    }
    const updateIsOver18 = () => {
        dispatch({type: 'UPDATE_IS_OVER_18', payload: isOver18})
    }



    return (
        <Container sm className='credit-container'>
            <div className='approval-border'>
                <Form>
                    <Form.Group className="mb-1" controlId="formBasicEmail">
                        <Form.Label >First name </Form.Label>
                        <Form.Control onChange={(e)=>{
                            setFName(e.target.value)}
                        } type="text" placeholder="Enter first name" />
                        <Form.Label>Last name</Form.Label>
                        <Form.Control onChange={(e)=>{
                            setLName(e.target.value)}
                        } type="text" placeholder="Enter last name" />
                        <Form.Label>Middle name (optional)</Form.Label>
                        <Form.Control onChange={(e)=>{
                            setMName(e.target.value)}
                        } type="text" placeholder="Enter middle name" />
                        <Form.Label>Birthdate (optional)</Form.Label>
                        <Form.Control onChange={(e)=>{
                            setBirthDate(e.target.value)}
                        } type="text" placeholder="Enter birthdate" />
                    </Form.Group>

                    <Form.Group className="mb-1" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control onChange={(e)=>{
                            setEmail(e.target.value)}
                        } type="email" placeholder="Email" />
                    </Form.Group>
                    <FormGroup>
                        <Form.Check
                            label="Male"
                            name="group1"
                            type='radio'
                            onClick={() => {
                                setGender('Male');
                            }
                            }
                        />
                        <Form.Check
                            label="Female"
                            name="group1"
                            type="radio"
                            onClick={()=>{
                                setGender('Female')
                            }
                            }
                        />
                    </FormGroup>
                    <Form.Group className="mb-1" controlId="formBasicCheckbox">
                        <Form.Check onClick={()=>{
                            setIsOver18(!isOver18);
                        }
                        } type="checkbox" label="I am over 18 years old" />
                    </Form.Group>
                    <Button onClick={() => {
                        if (fName === ''){
                            alert('Please enter your name');
                            return
                        }
                        else if (lName === ''){
                            alert('Please enter your last name');
                            return
                        }
                        else if (email === ''){
                            alert('Please enter your email');
                            return
                        }

                        else if(email.match(
                            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        ) === null) {
                            alert('Enter your email properly');
                            return
                        }

                        else if (gender === ''){
                            alert('Please select your gender');
                            return
                        }

                        else if (!isOver18){
                            alert('Confirm that you are over 18')
                            return
                        }

                        updateFirstName(fName);
                        updateLastName(lName);
                        updateMiddleName(mName);
                        updateBirthDate(birthDate);
                        updateEmail(email);
                        updateGender(gender);
                        updateIsOver18(isOver18);

                        handleClick();
                    }
                    } variant="primary" type="button">
                        Next
                    </Button>

                </Form>
            </div>
        </Container>

    );
};

export default Personal;

