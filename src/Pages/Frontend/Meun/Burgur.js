import { Col, Row } from 'antd'
import React from 'react'
import { Fade, Slide } from 'react-awesome-reveal'
import { Link } from 'react-router-dom'
import img1 from '../../../asset/images/Menu/1.jpeg'
import img2 from '../../../asset/images/Menu/2.png'
import img3 from '../../../asset/images/Menu/3.jpg'
import img4 from '../../../asset/images/Menu/4.png'
import img5 from '../../../asset/images/Menu/5.jpg'
import img6 from '../../../asset/images/Menu/6.png'
import img7 from '../../../asset/images/Menu/7.jpg'
import img8 from '../../../asset/images/Menu/8.png'
import img9 from '../../../asset/images/Menu/9.png'
import img10 from '../../../asset/images/Menu/10.png'
import img11 from '../../../asset/images/Menu/11.png'
import img12 from '../../../asset/images/Menu/12.png'
import img13 from '../../../asset/images/Menu/13.png'
import img14 from '../../../asset/images/Menu/14.png'
import img15 from '../../../asset/images/Menu/15.png'
import img16 from '../../../asset/images/Menu/16.png'
import img17 from '../../../asset/images/Menu/17.png'
import img18 from '../../../asset/images/Menu/18.png'
import img19 from '../../../asset/images/Menu/19.png'
import img20 from '../../../asset/images/Menu/20.png'
const Burgur = () => {
    return (
        <main className='Menu'>
            <Slide>
                <section className='Burgur bg-primary text-white' id='Burgur_Menu' >
                    <div className="container" style={{ height: "30vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <div className="row">
                            <div className="col-12">
                                <h6 className='heading1 display-5' >Our Menu</h6>
                                <p className="text-center">Home  &gt; Menu</p>
                            </div>
                        </div>
                    </div>
                </section>
            </Slide>
            <Fade>
                <section>
                    <div className="container pt-5 pb-5">
                        <Row gutter={[8,8]}>
                            <Col xs={24} sm={24} md={12} lg={6} xl={6}>
                            <Link><img src={img1} className='img-fluid' alt="Menu_Img1" /></Link>
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={6} xl={6}>
                            <Link><img src={img2} className='img-fluid' alt="Menu_Img1" /></Link>
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={6} xl={6}>
                            <Link><img src={img3} className='img-fluid' alt="Menu_Img1" /></Link>
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={6} xl={6}>
                            <Link><img src={img4} className='img-fluid' alt="Menu_Img1" /></Link>
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={6} xl={6}>
                            <Link><img src={img5} className='img-fluid' alt="Menu_Img1" /></Link>
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={6} xl={6}>
                            <Link><img src={img6} className='img-fluid' alt="Menu_Img1" /></Link>
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={6} xl={6}>
                            <Link><img src={img7} className='img-fluid' alt="Menu_Img1" /></Link>
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={6} xl={6}>
                            <Link><img src={img8} className='img-fluid' alt="Menu_Img1" /></Link>
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={6} xl={6}>
                            <Link><img src={img9} className='img-fluid' alt="Menu_Img1" /></Link>
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={6} xl={6}>
                            <Link><img src={img10} className='img-fluid' alt="Menu_Img1" /></Link>
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={6} xl={6}>
                            <Link><img src={img11} className='img-fluid' alt="Menu_Img1" /></Link>
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={6} xl={6}>
                            <Link><img src={img12} className='img-fluid' alt="Menu_Img1" /></Link>
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={6} xl={6}>
                            <Link><img src={img13} className='img-fluid' alt="Menu_Img1" /></Link>
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={6} xl={6}>
                            <Link><img src={img14} className='img-fluid' alt="Menu_Img1" /></Link>
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={6} xl={6}>
                            <Link><img src={img15} className='img-fluid' alt="Menu_Img1" /></Link>
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={6} xl={6}>
                            <Link><img src={img16} className='img-fluid' alt="Menu_Img1" /></Link>
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={6} xl={6}>
                            <Link><img src={img17} className='img-fluid' alt="Menu_Img1" /></Link>
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={6} xl={6}>
                            <Link><img src={img18} className='img-fluid' alt="Menu_Img1" /></Link>
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={6} xl={6}>
                            <Link><img src={img19} className='img-fluid' alt="Menu_Img1" /></Link>
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={6} xl={6}>
                            <Link><img src={img20} className='img-fluid' alt="Menu_Img1" /></Link>
                            </Col>
                        </Row>
                    </div>
                </section>
            </Fade>
        </main>
    )
}

export default Burgur