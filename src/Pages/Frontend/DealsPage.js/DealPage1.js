import { Col, Row } from 'antd'
import React from 'react'
import { Zoom } from 'react-awesome-reveal'


import img1 from '../../../asset/images/Deals/deal1/Deal1.jpg'
import img2 from '../../../asset/images/Deals/deal1/deal2.png'
import { Link } from 'react-router-dom'
const Dealspage1 = () => {
    return (
        <main className='Dealspage1'>
            <Zoom>
                <section className='py-5'>
                    <div className="container text-center">
                        <Row gutter={[8,8]}>
                            <Col sm={24} md={12} lg={12}>
                                <div className='Dealbox py-4 px-2'>
                                   <img src={img1} className='img-fluid' alt="Deals_Page1_Images1" />
                                </div>
                            </Col>
                            <Col sm={24} md={12} lg={12}>
                                <div className='Dealbox py-4 px-2'>
                                   <img src={img2} className='img-fluid' alt="Deals_Page1_Images2" />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={24} md={24} lg={12} >
                            <Link  id='Deal_link' >Order Now</Link>
                            </Col>
                            <Col sm={24} md={24} lg={12} >
                            <Link  to='/deals' id='Deal_link1' >Go Back</Link>
                            </Col>
                        </Row>
                    </div>
                </section>
            </Zoom>
        </main>
    )
}

export default Dealspage1