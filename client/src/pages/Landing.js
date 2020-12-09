import React, {useState, useEffect} from 'react'
import { Col, Container, Row, Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    Table} from 'reactstrap';
import banner from '../assets/images/02.jpg';
import vivek from '../assets/images/vivek.jpg';
import i3 from '../assets/images/03.jpg';
import i4 from '../assets/images/04.jpg';
import i5 from '../assets/images/05.jpg';
import principal from '../assets/images/principal.jpg';
import manager1 from '../assets/images/manager1.jpg';
import { Link } from 'react-router-dom';
import applyad from '../assets/images/applyad.jpg';
import academics from '../assets/images/academics.jpg';
import axios from "axios";

const images = [
    {
      src: i3,
      altText: 'Image from the Annual Prospectus',
      caption: 'Image from the Annual Prospectus'
    },
    {
      src: i4,
      altText: 'Image from the Annual Prospectus',
      caption: 'Image from the Annual Prospectus'
    },
    {
      src: i5,
      altText: 'Image from the Annual Prospectus',
      caption: 'Image from the Annual Prospectus'
    }
  ];

const Landing = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [news,setNews]=useState();
    useEffect(() => {
      axios.get('/api/home/news')
      .then(res=>{
        setNews(res.data.data);
      })
    }, [])

    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }
    const slides = images.map((item) => {
        return (
          <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.src}
          >
            <img src={item.src} alt={item.altText} height="400" width="100%"/>
            {/* <CarouselCaption captionText={item.caption} /> */}
          </CarouselItem>
        );
      });
    return (
        <>            
            <Container className="mt-5 mb-5">

                <Row className="m-5">
                  <Col lg={4} className="mt-5">
                    <div className="d-flex justify-content-center"><img src={vivek} width="120" height="120" alt=""/></div>
                    <div className="mt-5 mb-3">
                      <p className="d-flex justify-content-center">स्त्रियों की बहुत-सी कठिन समस्याएँ है,</p>
                      <p className="d-flex justify-content-center">पर उनमें एक भी ऐसा नहीं जो, </p>
                      <p className="d-flex justify-content-center">उस जादू भरे शब्द शिक्षा के द्वारा हल ना हो सके।</p>
                      <p className="float-right">-विवेकानन्द</p>
                    </div>
                  </Col>
                  <Col lg={8}>
                    <Carousel
                        activeIndex={activeIndex}
                        next={next}
                        previous={previous}
                        >
                        <CarouselIndicators items={images} activeIndex={activeIndex} onClickHandler={goToIndex} />
                        {slides}
                        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                    </Carousel>
                  </Col>
                </Row>

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
                    <Link to={`/events`} className="float-right pr-3 nonactive">More >></Link>
                  </Col>
                </Row>

                <Row className="mt-5">
                  <Col><h3>About us</h3></Col>
                </Row>
                <Row className="mt-3">
                    <Col lg={6} className="pt-4">
                        
                        <p className="text-muted">
 <span className="pr-5">&nbsp;</span>
                          यह महात्मा बुद्ध की भूमि है। वे दुनिया भर में महान शिक्षक के रूप में जाने जाते हैं। इसके बावजूद
कुशीनागर जनपद शिक्षा की दृष्टि से पिछड़ा हुआ है। शिक्षा केंद बहुत है पर सचमुच के शिक्षा केंद्र का नितांत
अभाव है। इसी तथ्य को ध्यान में रखकर लोकायतन जन विकास केंद्र ने इस क्षेत्र की महिलाओं की शिक्षा के लिए
इस केंद्र की रचना की है।<br/><br/><span className="pr-5">&nbsp;</span> 15 फरवरी 2013 को हिंदी के वरिष्ठ कवि एवं जवाहरलाल नेहरु विश्वविद्याल, नई
दिल्ली के प्रोफेसर डॉ. केदारनाथ सिंह ने श्रीमती उर्मिला देवी की उपस्थिति में वटवृक्ष लगाकर महाविद्यालय की
स्थापना की है।</p>
<p className="text-muted"><span className="pr-5">&nbsp;</span>शिक्षित और सशक्त्त बेटियाँ ही समाज का भविष्य हैं।</p><br/>
                        <p className="text-muted float-right">- सदानन्द शाही (संरक्षक)</p>
                    </Col>
                    <Col lg={6}>
                        <img src={banner} alt="Banner"  border="0" className="banner"/>
                    </Col>
                </Row>
                <Link to={`/about`} className="float-right pr-3 nonactive">More >></Link>

                <Row className="mt-5">
                    <Col xl={6} className="">
                    <h3 className="d-flex justify-content-center">Admission</h3>
                    
                    <Link to={`/apply`} className="nonactive card">
                      <img src={applyad} alt="Banner"  border="0" className="apply"/>
                      <div className="card-img-overlay d-flex flex-column justify-content-end p-0">
                        <h6 className="caption">
                          Apply Now
                        </h6>
                      </div>
                      </Link>
                    </Col>
                    <Col xl={6}>
                    <h3 className="d-flex justify-content-center">Academics</h3>
                    <Link to={`/academics`} className="nonactive card">
                      <img src={academics} alt="Banner"  border="0" className="apply"/>
                      <div className="card-img-overlay d-flex flex-column justify-content-end p-0">
                        <h6 className="caption">
                          More >>
                        </h6>
                      </div>  
                    </Link>
                    </Col>
                </Row>         

                <Row className="mt-5 mb-5">
                  <Col lg={6}>
                    <h4 className="d-flex justify-content-center border">Principal's Desk</h4>
                    <Row>
                      <Col md={5} className="d-flex justify-content-center align-items-center">
                          <img src={principal} width="180" height="230" alt=""/>
                      </Col>
                      <Col md={7} className="text-muted pt-4">
                      <p className="objective d-flex justify-content-center">महिलाओं की आन्तरिक शक्तियों को जगाने की जरूरत हैं।<br/>
                            आन्तरिक शक्ति का अर्थ हैं सुजनशीलता, दृढ़ संकल्प और साहस।</p><br/>
                        <p className="objective float-right">-डाॅ. मनीषा सिंह (प्रभारी प्राचार्य)</p>

                      </Col>
                    </Row>
                  </Col>
                  <Col lg={6}>
                    <h4 className="d-flex justify-content-center border">From the Manager</h4>
                    <Row>
                      <Col md={5} className="d-flex justify-content-center align-items-center">
                          <img src={manager1} width="200" height="200" alt=""/>
                      </Col>
                      <Col md={7} className="text-muted pt-4">
                        <p className="objective d-flex justify-content-center">महिलाओं की आन्तरिक शक्तियों को जगाने की जरूरत हैं।<br/>
                            आन्तरिक शक्ति का अर्थ हैं सुजनशीलता, दृढ़ संकल्प और साहस।</p><br/>
                        <p className="objective float-right">-डाॅ. जान्हवी सिंह (प्रबंधक)</p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
            </Container>
        </>
    )
}

export default Landing
