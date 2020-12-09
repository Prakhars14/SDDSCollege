import React from 'react'
import { Col, Container, Row } from 'reactstrap'

const Process = () => {
    return (
        <>

            <Container className="mt-5 mb-5">
            <Row>
                <Col><h3>Admission Process</h3></Col>
            </Row>
            <Row className="m-5">
                    <Col>
                        <h5>आवेदन एवं प्रवेश प्रक्रिया</h5>
                        <p className="text-muted m-4">
                        <span className="pr-5">&nbsp;</span>स्नातक कक्षाओं में प्रवेश के लिए आवेदन पत्र महाविद्यालय कार्यालय से रू0 100.00 भुगतान पर प्राप्त
किया जा सकता है। प्रवेश मेरिट, साक्षात्कार/प्रवेश परीक्षा के आधार पर होगा।
                        </p>
                        <h5>प्रवेश हेतु अर्हता</h5>
                        <p className="text-muted m-4">
                        <span className="pr-5">&nbsp;</span>स्नातक प्रथम वर्ष हेतु अभ्यर्थी का इण्टरमीडिएट की परीक्षा उत्तीर्ण होना आवश्यक है। विश्वविद्यालय/शासन
के निर्देशों के अनुसार प्रवेश नियमों में संशोधन किया जा सकता हैं। अनुसुचित जाति/अनुसूचित जनजाति/पिछड़ी
जाति, महाविद्यालय में सेवारत के पुत्र/पुत्री/पत्नी का निर्धारित कोटे के अनुसार निश्चित समय में प्रवेश दिया
जायेगा।
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Process
