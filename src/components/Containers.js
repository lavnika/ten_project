import React from 'react';
import './Containers.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import { Button } from './Button';

function Containers() {
    return (
    <div className="containers">
        <Container><h2>We're Hiring Interns!!!</h2>
        <Row>
            <Col className="img"><Image src="images/img-10.jpg"/></Col>
            {/* <img src="images/img-9.jpg"></img> */}
            <Col>The Student Intern program is a structured and guided work-based learning program for students currently enrolled in India.

 
        <p>
        There is a small registration fee, INR 400 /- (RUPEES Four HUNDRED ONLY) applicable to all incoming interns  as part of this One-of-a-Kind Point based Program. This is required not just to ensure a seamless on-boarding and exit process but also to supply the interns with relevant study material and make them aware of how a corporate setup works.
        </p>
        <p>
        Scan the QR code to complete your payment and submit the below application form to start with your registration process.
        </p>
        <p>
        Please keep the payment transaction ID handy for submitting
        the form.
        </p>
        <p>
        Note: This internship does not offer an opportunity to earn money,
        rather helps an individual grow by working on the job and
        earn a certificate upon successful completion.
        </p>

        Check out few of our open internship positions below
        Refer the application form for more open positions


        Digital Marketing Interns

        General Management Interns

        Technical/Software Experts

        Product Management Interns

        Content Interns and more...</Col>
        </Row>
        </Container>

        <Container><h2>Contact Us!</h2>
        <Row>
            <Col>
            
            <Form>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Add A Message</Form.Label>
                <Form.Control type="text" placeholder="Enter A Message" />
            </Form.Group>

            

            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>

            </Col>
            <Col className="contact">
            <p> Email : hr.contact.ten@gmail.com</p>

            <p>Phone : +918595986120</p>

            <p>Address : Delhi</p>
            </Col>
        </Row>
        </Container>

    </div>
  );
}

export default Containers;
