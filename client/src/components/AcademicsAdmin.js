import Axios from 'axios';
import React, {useState} from 'react'
import { Col, Row } from 'reactstrap'
import setAuthToken from '../utils/setAuthToken';

const AcademicsAdmin = () => {
    const[dept, setDept]=useState();
    const[course, setCourse]=useState();
    const submitHandler=async(e)=>{
        e.preventDefault();
        const data={dept,course};
        setAuthToken(localStorage.jwtToken)
        const res=await Axios.post("/api/academics",data);
        console.log(res);
        if(res.status===200){
            setDept('');setCourse('');
        }
    }
    return (
        <>
          <h3>Academics Page</h3>
            <Row className="m-4">
                <Col>
                    <Row>
                        <h5>Add Academic Courses</h5>
                    </Row>
                    <Row className="p-3">
                        <form class="col">
                        <div class="form-group">
                            <label>Department</label>
                        <input type="text" value={dept} onChange={(e)=>setDept(e.target.value)} placeholder="Department Name" className="form-control"/>
                        </div>
                        <div class="form-group">
                        <label>Course</label>
                        <textarea value={course} onChange={(e)=>setCourse(e.target.value)} placeholder="Course" className="form-control"/>
                        </div>
                        <button type="submit" class="btn btn-primary float-right" onClick={submitHandler}>Submit</button>
                        </form>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default AcademicsAdmin
