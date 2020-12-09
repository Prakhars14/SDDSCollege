import React, {useState,useEffect} from 'react'
import { Col, Container, Row, Table } from 'reactstrap'
import {Accordion, Card} from 'react-bootstrap';
import axios from "axios";

const Academics = () => {
    const [course,setCourse]=useState();

    useEffect(() => {
        axios.get('/api/academics')
        .then(res=>setCourse(res.data.data))
        .catch(err=>console.log(err));
    }, [])

    return (
        <>
            <Container className="mt-5 mb-5">
            <Row>
                <Col><h3>Academic Courses</h3></Col>
            </Row>
                <Row className="mt-5">
                <Table responsive>
                <thead>
                    <tr>
                    <th>S.No</th>
                    <th>Course</th>
                    <th>Department</th>
                    </tr>
                </thead>
                <tbody>
                    {course&&course.map((app,index)=>(<tr>
                    <th scope="row">{index+1}</th>
                    <td>{app.course}</td>
                    <td>{app.department}</td>
                    </tr>))}
                </tbody>
            </Table>
                </Row>
            </Container>
        </>
    )
}

export default Academics
