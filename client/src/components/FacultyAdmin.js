import React, {useState} from 'react'
import { Col, Row } from 'reactstrap'
import axios from "axios";
import setAuthToken from '../utils/setAuthToken';
const FacultyAdmin = () => {
    const[name, setName]=useState();
    const[qual, setQual]=useState();
    const[image, setImage]=useState();

    const submitHandler=async(e)=>{
        e.preventDefault();
        const uploadConfig=await axios.get('/api/upload');
        console.log(uploadConfig);
        delete axios.defaults.headers.common['Authorization']
        const uploaded=await axios.put(uploadConfig.data.url, image);

        console.log("hoja bhai",uploaded)


        const data={name,qual,image:uploadConfig.data.key};
        setAuthToken(localStorage.jwtToken)
        const res=await axios.post("/api/faculty",data);
        console.log(res);
        if(res.status==200){
            setName('');setImage('');setQual('');
        }
    }

    const imageHandler=(e)=>{
        setImage(e.target.files[0]);
    }

    return (
        <>
           <h3> Faculty</h3>
            <Row className="m-4">
                <Col>
                    <Row>
                        <h5>Add Faculty Details</h5>
                    </Row>
                    <Row className="p-3">
                        <form class="col">
                        <div class="form-group">
                            <label>Faculty Name</label>
                        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name" className="form-control"/>
                        </div>
                        <div class="form-group">
                        <label>Faculty Qualification</label>
                        <input type="text" value={qual} onChange={(e)=>setQual(e.target.value)} placeholder="Qualification" className="form-control"/>
                        </div>
                        <div class="form-group">
                        <label>Faculty Photo</label>
                        <input type="file" onChange={imageHandler} className="form-control"/>
                        </div>
                        <button type="submit" class="btn btn-primary float-right" onClick={submitHandler}>Submit</button>
                        </form>

                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default FacultyAdmin
