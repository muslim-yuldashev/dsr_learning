import React from 'react';
import './Subscription.css';
import {Button, Card, CardGroup, Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

const Subscription = () => {
    const FREE = 'Free';
    const MONTHLY = 'Monthly';
    const YEARLY = 'Yearly';

    const dispatch = useDispatch();
    const updateSubscription = (subscription) => {
        dispatch({type: 'UPDATE_SUBSCRIPTION', payload: subscription})
    }

    return (
        <Container sm>
            <CardGroup className="subscription">
                <Card border="secondary" style={{ width: '18rem' }} className='subscription-card'>
                    <Card.Header>Free</Card.Header>
                    <Card.Body>
                        <Card.Title>Free Subscription</Card.Title>
                        <Card.Title>0.00$</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </Card.Text>
                        <Card.Text>
                            Mauris vitae ex orci. Integer a enim quis risus congue ultricies.
                            Integer hendrerit, arcu in aliquet commodo, sem enim pretium quam, vel maximus lorem augue et nulla
                        </Card.Text>
                        <Link to="/personal_info">
                            <Button variant="primary" onClick={() => {
                                updateSubscription(FREE);
                            }
                            }>Select a license</Button>
                        </Link>

                    </Card.Body>
                </Card>
                <Card border="primary" style={{ width: '18rem' }} className='subscription-card subscription-card2'>
                    <Card.Header>Monthly</Card.Header>
                    <Card.Body>
                        <Card.Title>Monthly Subscription</Card.Title>

                        <Card.Title>14.99$</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </Card.Text>
                        <Card.Text>
                            Mauris vitae ex orci. Integer a enim quis risus congue ultricies.
                            Integer hendrerit, arcu in aliquet commodo, sem enim pretium quam, vel maximus lorem augue et nulla
                        </Card.Text>

                        <Link to="/personal_info">
                            <Button variant="primary" onClick={() => {
                                updateSubscription(MONTHLY);
                            }
                            }>Select a license</Button>
                        </Link>

                    </Card.Body>
                </Card>

                <Card border="danger" style={{ width: '18rem' }} className='subscription-card subscription-card3'>
                    <Card.Header>Yearly</Card.Header>
                    <Card.Body>
                        <Card.Title>Yearly Subscription</Card.Title>

                        <Card.Title>99.99$</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </Card.Text>
                        <Card.Text>
                            Mauris vitae ex orci. Integer a enim quis risus congue ultricies.
                            Integer hendrerit, arcu in aliquet commodo, sem enim pretium quam, vel maximus lorem augue et nulla
                        </Card.Text>

                        <Link to="/personal_info">
                            <Button variant="primary" onClick={() => {
                                updateSubscription(YEARLY);
                            }
                            }>Select a license</Button>
                        </Link>

                    </Card.Body>
                </Card>
            </CardGroup>
        </Container>

    );
};

export default Subscription;