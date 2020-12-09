import Axios from 'axios';
import React, {useState,useEffect} from 'react';
import { Col, Container, Row } from 'reactstrap';

const EventDetails = (props) => {
    console.log(props.match.params.id);
    const [news,setNews]=useState();

    useEffect(() => {
      Axios.get('/api/home/news')
      .then(res=>{
        res.data.data.map(newa=>newa._id===props.match.params.id?
                setNews(newa):null
        )
      })
    }, [])
    return (
        <>
          <Container className="mt-5 mb-5">
            <Row>
                <Col><h3>{news&&news.name}</h3></Col>
            </Row>
                <Row>
                    <Col>
                        <p className="text-muted">{news&&news.description}</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default EventDetails
