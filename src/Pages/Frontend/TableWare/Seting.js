import { Col, Row } from 'antd'
import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { Link } from 'react-router-dom'

import img1 from '../../../asset/images/tableWare/1.png'
import img2 from '../../../asset/images/tableWare/2.png'
import img3 from '../../../asset/images/tableWare/3.png'
import img4 from '../../../asset/images/tableWare/4.png'
import img5 from '../../../asset/images/tableWare/5.png'
import img6 from '../../../asset/images/tableWare/6.png'
const Seting = () => {
    return (
        <main className='Collection'>
            <Fade>
                <section className='py-sm-1 py-md-2 py-lg-5'>
                    <div className="container pt-sm-1 pt-md-3 pt-lg-5">
                        <Row className='pt-3'>
                            <Col sm={24} md={12} lg={8}>
                                <div className='collection_card rounded-4 pb-4 me-sm-1 me-md-2 me-lg-4 my-2'>
                                    <img src={img1} alt="Collection_Image" className='img-fluid rounded-4 w-100' />
                                    <h2 className='parent pt-2 px-3'>Side Table</h2>
                                    <div className='px-3 pt-2'>
                                        <ins>$53.99</ins>
                                        <div className='text-center mt-3'>
                                            <Link id='link1' className='text-decoration-none py-2 px-4'>Book Table</Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={24} md={12} lg={8}>
                                <div className='collection_card rounded-4 pb-4 me-sm-1 me-md-2 me-lg-4 my-2'>
                                    <img src={img2} alt="Collection_Image" className='img-fluid rounded-4 w-100' />
                                    <h2 className='parent pt-2 px-3'>Family Table</h2>
                                    <div className='px-3 pt-2'>
                                        <del className='pe-2'>$220.59</del>
                                        <ins>$170.89</ins>
                                        <div className='text-center mt-3'>
                                            <Link id='link1' className='text-decoration-none py-2 px-4'>Book Table</Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={24} md={12} lg={8}>
                                <div className='collection_card rounded-4 pb-4 me-sm-1 me-md-2 me-lg-4 my-2'>
                                    <img src={img3} alt="Collection_Image" className='img-fluid rounded-4 w-100' />
                                    <h2 className='parent pt-2 px-3'>Friend Table</h2>
                                    <div className='px-3 pt-2'>
                                        <ins>$29.99</ins>
                                        <div className='text-center mt-3'>
                                            <Link id='link1' className='text-decoration-none py-2 px-4'>Book Table</Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row className='pt-3'>
                            <Col sm={24} md={12} lg={8}>
                                <div className='collection_card rounded-4 pb-4 me-sm-1 me-md-2 me-lg-4 my-2'>
                                    <img src={img4} alt="Collection_Image" className='img-fluid rounded-4 w-100' />
                                    <h2 className='parent pt-2 px-3'>Couple Table</h2>
                                    <div className='px-3 pt-2'>
                                        <ins>$44.59</ins>
                                        <div className='text-center mt-3'>
                                            <Link id='link1' className='text-decoration-none py-2 px-4'>Book Table</Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={24} md={12} lg={8}>
                                <div className='collection_card rounded-4 pb-4 me-sm-1 me-md-2 me-lg-4 my-2'>
                                    <img src={img5} alt="Collection_Image" className='img-fluid rounded-4 w-100' />
                                    <h2 className='parent pt-2 px-3'>Small Family Table</h2>
                                    <div className='px-3 pt-2'>
                                        <del className='pe-2'>$100.99</del>
                                        <ins>$80.39</ins>
                                        <div className='text-center mt-3'>
                                            <Link id='link1' className='text-decoration-none py-2 px-4'>Book Table</Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={24} md={12} lg={8}>
                                <div className='collection_card rounded-4 pb-4 me-sm-1 me-md-2 me-lg-4 my-2'>
                                    <img src={img6} alt="Collection_Image" className='img-fluid rounded-4 w-100' />
                                    <h2 className='parent pt-2 px-3'>Book Area</h2>
                                    <div className='px-3 pt-2'>
                                        <ins>$152.29</ins>
                                        <div className='text-center mt-3'>
                                            <Link id='link1' className='text-decoration-none py-2 px-4'>Book Table</Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>
            </Fade>
        </main>
    )
}

export default Seting