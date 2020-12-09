import Axios from 'axios';
import React, {useState} from 'react'
import { Col, Container, Row } from 'reactstrap'
import {  Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Apply = () => {
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [dob,setDob]=useState();
    const [mob,setMob]=useState();
    const [address,setAddress]=useState();
    
    const submitHandler=async(e)=>{
        e.preventDefault();
        const data={name,email,dob,mob,address};
        console.log(data);
        const res=await Axios.post("/api/apply",data);
        console.log(res);
        if(res.status===200){
            setName();setEmail();setDob();setMob();setAddress();
        }
    }

    return (
        <>

            <Container className="mt-5 mb-5">
            <Row>
                <Col><h3>Apply Online</h3></Col>
            </Row>
                <Row className="d-flex justify-content-center pt-5 pb-5">
                    <Col xl={8}>
                    <Form onSubmit={submitHandler}>
                        <FormGroup row>
                            <Label for="exampleEmail" sm={2}>Full Name</Label>
                            <Col sm={10}>
                            <Input value={name} onChange={(e)=>setName(e.target.value)} type="text" name="name" id="exampleName" placeholder="Candidate Name" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleEmail" sm={2}>Email</Label>
                            <Col sm={10}>
                            <Input value={email} onChange={(e)=>setEmail(e.target.value)}  type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="examplePassword" sm={2}>Date of Birth</Label>
                            <Col sm={10}>
                            <Input value={dob} onChange={(e)=>setDob(e.target.value)}  type="date" name="Date" id="examplePassword" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleEmail" sm={2}>Mobile Number</Label>
                            <Col sm={10}>
                            <Input value={mob} onChange={(e)=>setMob(e.target.value)}  type="number" name="mobno" id="exampleNumber" placeholder="Mobile Number" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleEmail" sm={2}>Address</Label>
                            <Col sm={10}>
                            <Input value={address} onChange={(e)=>setAddress(e.target.value)}  type="textarea" name="address" id="exampleAddress" placeholder="Candidate's Address" />
                            </Col>
                        </FormGroup>
                        {/* <FormGroup row>
                            <Label for="exampleEmail" sm={2}>Last Educational Certificates</Label>
                            <Col sm={10}>
                            <Input type="file" name="file" id="exampleFile"/>
                            </Col>
                        </FormGroup> */}
                        
                            <Col className="d-flex justify-content-center">
                            <Button color="primary" >Submit</Button>
                            </Col>
                    </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Apply
