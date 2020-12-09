import React from 'react'
import { Col, Container, Row } from 'reactstrap';

const Contact = () => {

    return (
        <>
           <Container className="mt-5 mb-5">
            <Row>
                <Col><h3>Contact us</h3></Col>
            </Row>
            <Row className="d-flex justify-content-center m-5 ">
                <Col>
                    <h4>Address</h4>
                    <div class="text-muted">
                        <span>SDDS Women's College, Ramkola,<br/> Kushinagar-274301</span>
                    </div>
                </Col>
                <Col>
                    <h4>Phone Number</h4>
                    <div class="text-muted">
                        <span>09451087167, 0940091420, <br/>09453251452</span>
                    </div>
                </Col>
                <Col>
                    <h4>Email Address</h4>
                    <div class="text-muted">
                        <span>sddswomenscollege@gmail.com</span>
                    </div>
                </Col>
            </Row>
            <Row className="d-flex justify-content-center m-5 ">
            <iframe title="1" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28467.013812013105!2d83.8353654!3d26.8915366!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3993f1102fb05a55%3A0x6b68f810413a9dd8!2sShiv%20Dulari%20Devi%20Daldapshahi%20Mahila%20Mahavidyalaya!5e0!3m2!1sen!2sin!4v1605644398328!5m2!1sen!2sin" style={{width:"600",height:"450", frameborder:"0", border:"none"}}></iframe>
            </Row>
            </Container>
        </>
    )
}

export default Contact
