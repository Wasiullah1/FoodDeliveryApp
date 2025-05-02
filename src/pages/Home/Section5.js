import React from 'react'
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import storeIOS from '../../assets/shop/appstore.png'
import storeGoogle from '../../assets/shop/googleplay.png'
import downloadImage from '../../assets/shop/e-shop.png'
import Brand1 from '../../assets/brands/brand-11.png'
import Brand2 from '../../assets/brands/brand-12.png'
import Brand3 from '../../assets/brands/brand-13.png'
import Brand4 from '../../assets/brands/brand-14.png'
import Brand5 from '../../assets/brands/brand-15.png'
import Brand6 from '../../assets/brands/brand-16.png'
import Brand7 from '../../assets/brands/brand-17.png'
import Brand8 from '../../assets/brands/brand-18.png'

function Section5() {
  return (
    <>
    <section className='shop_section'>
        <Container>
            <Row className='align-items-center'>
                <Col lg={6} className='text-center text-lg-start mb-5 mb-lg-0'>
                    <h4>Download mobile App and</h4>
                    <h2>save up to 20%</h2>
                    <p>
                    Aliquam a augue suscipit, luctus neque purus ipsum and neque
                    dolor primis libero tempus, blandit varius
                    </p>
                    <Link to='/'>
                        <img src={storeIOS} alt='IOS' className='img-fluid store me-3'/>
                    </Link>
                    <Link to='/'>
                        <img src={storeGoogle} alt='Android' className='img-fluid store me-3'/>
                    </Link>
                </Col>
                <Col lg={6}>
                    <img src={downloadImage} alt='e-shop' className='img-fluid' />
                </Col>
            </Row>
        </Container>
    </section>
    <section className='brand_section'>
        <Container>
            <Row>
                <Carousel>
                    <Carousel.Item>
                        <Carousel.Caption>
                            <div className='d-flex align-items-center justify-content-between'>
                                <div className='brand_img'>
                                    <img src={Brand1} className='img-fluid' alt='brand-1' />
                                </div>
                                <div className='brand_img'>
                                    <img src={Brand2} className='img-fluid' alt='brand-2' />
                                </div>
                                <div className='brand_img'>
                                    <img src={Brand3} className='img-fluid' alt='brand-3' />
                                </div>
                                <div className='brand_img'>
                                    <img src={Brand4} className='img-fluid' alt='brand-4' />
                                </div>
                                <div className='brand_img'>
                                    <img src={Brand5} className='img-fluid' alt='brand-5' />
                                </div>
                                <div className='brand_img'>
                                    <img src={Brand6} className='img-fluid' alt='brand-6' />
                                </div>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                            <div className='d-flex align-items-center justify-content-between'>
                                <div className='brand_img'>
                                    <img src={Brand3} className='img-fluid' alt='brand-3' />
                                </div>
                                <div className='brand_img'>
                                    <img src={Brand4} className='img-fluid' alt='brand-4' />
                                </div>
                                <div className='brand_img'>
                                    <img src={Brand5} className='img-fluid' alt='brand-5' />
                                </div>
                                <div className='brand_img'>
                                    <img src={Brand6} className='img-fluid' alt='brand-6' />
                                </div>
                                <div className='brand_img'>
                                    <img src={Brand7} className='img-fluid' alt='brand-7' />
                                </div>
                                <div className='brand_img'>
                                    <img src={Brand8} className='img-fluid' alt='brand-8' />
                                </div>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                {/* <Carousel interval={3000} controls={true} indicators={true}>
                    <Carousel.Item>
                        <div className="d-flex align-items-center justify-content-between px-5">
                        {[Brand1, Brand2, Brand3, Brand4, Brand5, Brand6].map((img, i) => (
                            <div className="brand_img" key={i}>
                            <img src={img} className="img-fluid" alt={`brand-${i + 1}`} />
                            </div>
                        ))}
                        </div>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div className="d-flex align-items-center justify-content-between px-5">
                        {[Brand3, Brand4, Brand5, Brand6, Brand7, Brand8].map((img, i) => (
                            <div className="brand_img" key={i}>
                            <img src={img} className="img-fluid" alt={`brand-${i + 3}`} />
                            </div>
                        ))}
                        </div>
                    </Carousel.Item>
                </Carousel> */}
            </Row>
        </Container>
    </section>
    </>
  )
}

export default Section5