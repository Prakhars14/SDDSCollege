import React from 'react'
import { Col, Container, Row } from 'reactstrap';

const Results = () => {
    return (
        <>
            <Container className="mt-5 mb-5">
                <Row>
                    <Col><h3>Results</h3></Col>
                </Row>
                <Row>
                    <Col>
                        <p className="text-muted"> Internal Examination result is declared by the respective department at college level and is displayed on the department notice board.</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Results
