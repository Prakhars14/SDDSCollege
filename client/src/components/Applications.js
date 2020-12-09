import React, {useState, useEffect} from 'react'
import { Table } from 'reactstrap'
import axios from "axios";
import moment from "moment";

const Applications = () => {
    const [apply,setApply]=useState();

    useEffect(() => {
        axios.get('/api/apply')
        .then(res=>setApply(res.data.data))
        .catch(err=>console.log(err));
    }, [])

    return (
        <>
           <h3>Applications Received</h3>
           <Table responsive>
                <thead>
                    <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Date of Birth</th>
                    <th>Mobile No.</th>
                    <th>Address</th>
                    <th>Submitted on</th>
                    </tr>
                </thead>
                <tbody>
                    {apply&&apply.map((app,index)=>(<tr>
                    <th scope="row">{index+1}</th>
                    <td>{app.name}</td>
                    <td>{app.email}</td>
                    <td>{moment(app.dateofbirth).format('DD-MM-YYYY')}</td>
                    <td>{app.mobile}</td>
                    <td>{app.address}</td>
                    <td>{moment(app.createdAt).format("DD-MM-YYYY, h:mm:ss a")}</td>
                    </tr>))}
                </tbody>
            </Table>
        </>
    )
}

export default Applications
