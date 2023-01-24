import React from 'react';
import {Button, Card, Container} from "react-bootstrap";
import {Link} from "react-router-dom";

const Intro = () => {
    return (
        <Container style={{ width: '50rem'}}>

            <Card style={{ width: '50em' }}>
                <Card.Img variant="top" src="https://csa-iot.org/wp-content/uploads/2021/12/DSR-Corporation-Zigbee-Alliance-scaled-1.jpg" />
                <Card.Body>
                    <Card.Title>DSR Learning</Card.Title>
                    <Card.Text>
                        DSR Learning is an online educational platform that
                        helps you discover and develop business, technology-related, and creative skills through expert-led
                    </Card.Text>
                    <Link to='/login'><Button variant="primary">Subscribe</Button></Link>
                </Card.Body>
            </Card>

        </Container>

    );
};

export default Intro;