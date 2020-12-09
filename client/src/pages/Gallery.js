import React, { useState, useCallback, useEffect} from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "../assets/images/photos";
import { Col, Container, Row } from "reactstrap";
import Axios from "axios";

const GalleryPage = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
    const [Images, setImages] = useState();
  
    useEffect(() => {
      Axios.get('/api/home/gallery')
      .then(res=>{
        let arr=[];
        res.data.data.map(img=>(
          arr.push({ src:img.ImageUrl, width:4,height:3} )
        ))
        setImages(arr);
      })
      .catch(err=>console.log(err));
    }, [])


    const openLightbox = useCallback((event, { photo, index }) => {
      setCurrentImage(index);
      setViewerIsOpen(true);
    }, []);
  
    const closeLightbox = () => {
      setCurrentImage(0);
      setViewerIsOpen(false);
    };
  console.log(Images);

    return (
      <>
        <Container className="mt-5 mb-5">
            <Row className="pb-4">
                <Col><h3>Gallery</h3></Col>
            </Row>
       {Images&&<Gallery photos={Images} onClick={openLightbox} />}
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal size="md" onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={Images.map(x => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>          
      </Container>

      </>
    );
}

export default GalleryPage
