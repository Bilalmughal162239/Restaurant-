import { Col, Row } from 'antd'
import React from 'react'
import { Zoom } from 'react-awesome-reveal'
import { Link } from 'react-router-dom'

import img1 from '../../../asset/images/Home/Home/collection1.png'
import img2 from '../../../asset/images/Home/Home/collection2.png'
import img3 from '../../../asset/images/Home/Home/collection3.png'
const Collection = () => {
    return (
        <main className='Collection'>
            <Zoom>
                <section className='py-sm-1 py-md-2 py-lg-5'>
                    <div className="container pt-sm-1 pt-md-3 pt-lg-5">
                        <Row>
                            <Col sm={24} md={12} lg={12}>
                                <h1 className='fs-1 pb-2'>Explore Our Collections</h1>
                                <p className='fs-5'>Discover must-have items for your kitchen.</p>
                            </Col>
                            <Col sm={24} md={12} lg={12}>
                                <Link className='py-3 px-4 rounded-4 ' id='collection_link'>Shop Catering Essentials</Link>
                            </Col>
                        </Row>
                        <Row className='pt-3'>
                            <Col sm={24} md={12} lg={8}>
                                <div className='collection_card rounded-4 pb-4 me-sm-1 me-md-2 me-lg-4 my-2'>
                                    <img src={img1} alt="Collection_Image" className='img-fluid rounded-4' />
                                    <h2 className='parent pt-2 px-3'>Artisan Pasta</h2>
                                    <div className='px-3 pt-2'>
                                        <ins>$14.99</ins>
                                        <div className='text-center mt-3'>
                                            <Link id='link1' className='text-decoration-none py-2 px-4'>Add To Cart</Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={24} md={12} lg={8}>
                                <div className='collection_card rounded-4 pb-4 me-sm-1 me-md-2 me-lg-4 my-2'>
                                    <img src={img2} alt="Collection_Image" className='img-fluid rounded-4' />
                                    <h2 className='parent pt-2 px-3'>Organic Olive Oil</h2>
                                    <div className='px-3 pt-2'>
                                        <del className='pe-2'>$19.99</del>
                                        <ins>$14.99</ins>
                                        <div className='text-center mt-3'>
                                            <Link id='link1' className='text-decoration-none py-2 px-4'>Add To Cart</Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={24} md={12} lg={8}>
                                <div className='collection_card rounded-4 pb-4 me-sm-1 me-md-2 me-lg-4 my-2'>
                                    <img src={img3} alt="Collection_Image" className='img-fluid rounded-4' />
                                    <h2 className='parent pt-2 px-3'>Glass Water Goblets</h2>
                                    <div className='px-3 pt-2'>
                                        <ins>$14.99</ins>
                                        <div className='text-center mt-3'>
                                            <Link id='link1' className='text-decoration-none py-2 px-4'>Add To Cart</Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>
            </Zoom>
        </main>
    )
}

export default Collection