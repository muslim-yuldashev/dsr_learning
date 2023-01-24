import React, {useState} from 'react';
import './Approval.css';
import {Button, Container, Form} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

const Approval = () => {

    const navigate = useNavigate();
    function handleClick() {
        navigate("/review");
    }

    const [consent, setConsent] = useState(false);
    const [cookie, setCookie] = useState(false);

    const state = useSelector(state => state);

    const dispatch = useDispatch();
    const updateConsent = (consent) => {
        dispatch({type: 'UPDATE_CONSENT', payload: consent});
    }
    const updateCookie = (cookie) => {
        dispatch({type: 'UPDATE_COOKIE', payload: cookie});
    }

    return (
        <div>
            <Container sm className='approval'>

                <div className='approval-border'>
                    <Form>
                        <Form.Control
                            type="text"
                            placeholder={state.login}
                            aria-label="Disabled input example"
                            disabled
                            readOnly
                        />
                        <Form.Control
                            type="text"
                            placeholder={state.email}
                            aria-label="Disabled input example"
                            disabled
                            readOnly
                        />
                        <Form.Group className="mb-1" controlId="formBasicCheckbox">
                            <Form.Check onClick={()=>{
                                setConsent(!consent);
                            }} type="checkbox" label="Consent to the processing of personal data" />
                        </Form.Group>
                        <Form.Group className="mb-1" controlId="formBasicCheckbox">
                            <Form.Check onClick={()=>{
                                setCookie(!cookie);
                            }} type="checkbox" label="The Website uses the cookie agreement" />
                        </Form.Group>
                    </Form>
                        <Button onClick={()=> {
                            if (!consent){
                                alert('Please confirm all agreements');
                                return
                            }
                            if (!cookie){
                                alert('Please confirm all agreements');
                                return
                            }
                            updateConsent(consent);
                            updateCookie(cookie);

                            handleClick();
                        }
                        } variant='primary'> Next </Button>

                </div>
            </Container>
        </div>
    );
};

export default Approval;