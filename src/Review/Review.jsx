import React from 'react';
import './Review.css';
import {Container, Form} from "react-bootstrap";
import {useSelector} from "react-redux";
const Review = () => {

    const state = useSelector(state => state);

    return (
        <div>
            <Container sm className='credit-container'>
                <Form className='review'>

                    <h2>Personal Data</h2>
                    <div><span>Login: </span>{`${state.login}`}</div>
                    <div><span>Password: </span>{`${state.password}`}</div>
                    <div><span>Subscription: </span>{`${state.subscription}`}</div>
                    <div><span>First Name: </span>{` ${state.firstName}`}</div>
                    <div><span>Last Name: </span>{`${state.lastName}`}</div>
                    <div><span>Middle Name: </span>{`${state.middleName}`}</div>
                    <div><span>Birthdate Name: </span>{`${state.birthDate}`}</div>
                    <div><span>Email: </span>{`${state.email}`}</div>
                    <div><span>Gender: </span>{`${state.gender}`}</div>
                    <div><span>Credit Card: </span>{`${state.cardNumber}`}</div>
                    <div><span>Credit Card Name: </span>{`${state.nameOfCard}`}</div>
                    <div><span>Expire Date: </span>{`${state.expireDate}`}</div>
                    <div>{state.isOver18? "* I am over 18 years old" : null }</div>
                    <div>{state.consent? "* I consent to the processing of personal data" : null }</div>
                    <div>{state.cookie? "* I agree to use the cookie agreement" : null }</div>


                </Form>

            </Container>
        </div>
    );
};

export default Review;