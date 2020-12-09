import React,{useState,useEffect} from 'react'
import { Col, Container, Row } from 'reactstrap';
import logo from '../assets/images/lgo.jpg';
import axios from "axios";

const Faculty = () => {
    const [faculty,setFaculty]=useState();
    useEffect(() => {
        axios.get('/api/faculty')
        .then(res=>{
          setFaculty(res.data.data);
        })
      }, [])
    return (
        <>
           <Container className="mt-5 mb-5">
            <Row>
                <Col><h3>Faculty</h3></Col>
            </Row>
            <Row className="m-5">
                <Col>
                {faculty&&faculty.map(prof=>(
                <Row className="mt-2 mb-2">
                    <Col lg={3}>
                        <img src={prof.imageURL} width="180" height="180" class="d-inline-block align-top" alt=""/>
                    </Col>
                    <Col lg={9}>
                        <h5> {prof.name}</h5>
                        <p className="text-muted">{prof.qualification}</p>
                    </Col>
                </Row>
                ))}

                    {/* <Row className="mt-2 mb-2">
                        <Col lg={3}>
                            <img src={logo} width="90" height="90" class="d-inline-block align-top" alt=""/>
                        </Col>
                        <Col lg={9}>
                            <h5> Prakhar Singh</h5>
                            <p className="text-muted">Ph.D Associate Professor, Department of Painting</p>
                        </Col>
                    </Row> */}
                </Col>
                {/* <Col>
                    <Row className="mt-2 mb-2">
                        <Col lg={3}>
                            <img src={logo} width="90" height="90" class="d-inline-block align-top" alt=""/>
                        </Col>
                        <Col lg={9}>
                            <h5> Prakhar Singh</h5>
                            <p className="text-muted">Ph.D Associate Professor, Department of Painting</p>
                        </Col>
                    </Row>
                    <Row className="mt-2 mb-2">
                        <Col lg={3}>
                            <img src={logo} width="90" height="90" class="d-inline-block align-top" alt=""/>
                        </Col>
                        <Col lg={9}>
                            <h5> Prakhar Singh</h5>
                            <p className="text-muted">Ph.D Associate Professor, Department of Painting</p>
                        </Col>
                    </Row>
                </Col> */}

                
            </Row>
            </Container>
        </>
    )
}

export default Faculty
