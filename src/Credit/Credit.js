import React, {useState} from 'react';
import './Credit.css';
import {useNavigate} from "react-router-dom";
import {Button} from "react-bootstrap";
import Cleave from 'cleave.js/react'
import {useDispatch} from "react-redux";

const Credit = () => {

    const navigate = useNavigate();
    function handleClick() {
        navigate("/approval");
    }

    const [credit, setCredit] = useState('');
    const [creditCardName, setCreditCardName] = useState('');
    const [expireDate, setExpireDate] = useState('');


    const dispatch = useDispatch();
    const updateCredit = (credit) => {
        dispatch({type: 'UPDATE_CREDIT', payload: credit})
    }
    const updateCreditCardName = (creditCardName) => {
        dispatch({type: 'UPDATE_CREDIT_CARD_NAME', payload: creditCardName})
    }
    const updateExpireDate = (expireDate) => {
        dispatch({type: 'UPDATE_EXPIRE_DATE', payload: expireDate})
    }

    return (
        <div className='credit-body'>
            <div className="credit-container">
                <div className="wrapper">
                    <div className="outer-card">
                        <div className="forms">
                            <div className="input-items"><span>Card Number</span>
                                <Cleave  options={{creditCard: true}} placeholder=".... .... .... ...."
                                         onChange={(e)=>{setCredit(e.target.value)} }>
                                </Cleave>
                            </div>
                            <div className="input-items"><span>Name on card</span>
                                <input placeholder="John Doe"
                                       onChange={(e)=>{setCreditCardName(e.target.value)}}/>
                            </div>
                            <div className="one-line">
                                <div className="input-items"><span>Expiry Date</span>
                                    <Cleave  options={{date: true, delimiter: "/", datePattern: ['m', 'y']}} placeholder="mm/yy"
                                            onChange={(e)=>{setExpireDate(e.target.value)}}>
                                    </Cleave>
                                </div>
                            </div>
                            <div className="input-buttons"><Button onClick={() => {
                                if (credit.length < 19){
                                    alert("Please enter your credit card properly")
                                    return
                                }
                                else if (creditCardName === ''){
                                    alert('Enter your credit card name');
                                    return
                                }
                                if (expireDate.length < 5){
                                    alert('Please enter your expire date properly');
                                    return
                                }

                                updateCredit(credit);
                                updateCreditCardName(creditCardName);
                                updateExpireDate(expireDate);

                                handleClick();
                            }
                            }>Save Changes</Button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Credit;