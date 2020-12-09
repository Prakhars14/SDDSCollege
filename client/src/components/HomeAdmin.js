import Axios from 'axios';
import React, {useState} from 'react'
import { Col, Row } from 'reactstrap'
import setAuthToken from '../utils/setAuthToken';

const HomeAdmin = () => {
    const[name, setName]=useState();
    const[desc, setDesc]=useState();
    const[url, seturl]=useState();

    const submitHandler=async(e)=>{
        e.preventDefault();
        const data={name,desc};
        console.log('dae',data);
        setAuthToken(localStorage.jwtToken)
        const res=await Axios.post("/api/home/news",data);
        console.log(res);
        if(res.status===200){
            setName('');setDesc('');
        }
    }
    const submitHandler1=async(e)=>{
        e.preventDefault();
        setAuthToken(localStorage.jwtToken)
        const data={url};
        const res=await Axios.post("/api/home/gallery",data);
        console.log(res);
        if(res.status===200){
            seturl('');
        }
    }
    return (
        <>
            <Row className="m-4">
                <Col>
                    <Row>
                        <h5>Add News/Events</h5>
                    </Row>
                    <Row className="p-3">
                        <form class="col">
                        <div class="form-group">
                            <label>Heading</label>
                        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Heading" className="form-control"/>
                        </div>
                        <div class="form-group">
                        <label>Description</label>
                        <textarea value={desc} onChange={(e)=>setDesc(e.target.value)} placeholder="Description" className="form-control"/>
                        </div>
                        <button type="submit" class="btn btn-primary float-right" onClick={submitHandler}>Submit</button>
                        </form>
                    </Row>
                    <Row>
                        <h5>Add Images to Gallery</h5>
                    </Row>
                    <Row className="p-3">
                        <form class="col">
                        <div class="form-group">
                            <label>Image URL</label>
                        <input type="text" value={url} onChange={(e)=>seturl(e.target.value)} placeholder="Image URL" className="form-control"/>
                        </div>
                        <button type="submit" class="btn btn-primary float-right" onClick={submitHandler1}>Submit</button>
                        </form>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default HomeAdmin
