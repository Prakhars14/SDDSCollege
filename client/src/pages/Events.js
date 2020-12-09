import Axios from 'axios';
import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row, Table } from 'reactstrap'

const Events = () => {

  const [news,setNews]=useState();

  useEffect(() => {
    Axios.get('/api/home/news')
    .then(res=>{
      setNews(res.data.data);
    })
  }, [])

    return (
        <>
        <Container className="mt-5 mb-5">
                <Row>
                    <Col><h3>Latest News/Events</h3></Col>
                </Row>
                <Row className="mt-3 mb-3">
                  <Col>
                    <Table striped>
                      <tbody>
                        {news&&news.map((item, index)=>(
                        <tr>
                        <th scope="row">{index+1}</th>
                        <td><Link to={`/events/${item._id}`} className="event">{item.name}</Link></td>
                      </tr>
                        ))}
                      </tbody>
                    </Table>
                  </Col>
                </Row>
        </Container>
        </>
    )
}

export default Events
