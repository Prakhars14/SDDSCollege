import React from 'react'

const Footer = () => {
    return (
        <>
    <footer class="footer-section">
        <div class="container">
            <div class="footer-cta pt-5 pb-5">
                <div class="row">
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="fas fa-map-marker-alt"></i>
                            <div class="cta-text">
                                <h4>Find us</h4>
                                <span>SDDS Women's College, Ramkola,<br/> Kushinagar-274301</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="fas fa-phone"></i>
                            <div class="cta-text">
                                <h4>Call us</h4>
                                <span>09451087167<br/> 0940091420<br/> 09453251452</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="far fa-envelope-open"></i>
                            <div class="cta-text">
                                <h4>Mail us</h4>
                                <span>sddswomenscollege@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright-area">
            <div class="container">
                <div class="row">
                    <div class="col-xl-4 col-lg-4 footer-social-icon text-left">
                        <span>Follow us &nbsp; 
                        <a href="https://www.facebook.com/sddswomenscollegeramkola.kushinagar"><i class="fab fa-facebook-f facebook-bg"></i></a>
                        {/* <a href="#"><i class="fab fa-twitter twitter-bg"></i></a> */}
                        </span>
                    </div>
                    <div class="col-xl-4 col-lg-4 ">
                        <div class="copyright-text">
                            <p>&copy; SDDS Women's College 2020</p>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 d-none d-lg-block float-right">
                        <div class="footer-menu">
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/apply">Admission</a></li>
                                <li><a href="/contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
        </>
    )
}

export default Footer
