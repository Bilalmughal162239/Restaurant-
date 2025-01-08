import { Col, Row } from 'antd'
import React from 'react'
import { Fade } from 'react-awesome-reveal'
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
const GalleryImage = () => {
  return (
    <main className='Collection'>
            <Fade>
                <section className='py-sm-1 py-md-2 py-lg-5'>
                    <div className="container pt-sm-1 pt-md-3 pt-lg-5">
                        <Row className='pt-3' gutter={[16,16]}>
                            <Col xs={24} sm={12} md={12} lg={8}>
                                <div className='collection_card rounded-4 pb-4'>
                                    <img src={img1} alt="Collection_Image" className='img-fluid rounded-4 w-100' />
                                    <h2 className='parent pt-2 px-3'>Tika Masala</h2>
                                    <div className='px-3 pt-2'>
                                        <ins>$14.99</ins>
                                        <div className='text-center mt-3'>
                                            <Link id='link1' className='text-decoration-none py-2 px-4'>Add To Cart</Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={24} sm={12} md={12} lg={8}>
                                <div className='collection_card rounded-4 pb-4'>
                                    <img src={img2} alt="Collection_Image" className='img-fluid rounded-4 w-100' />
                                    <h2 className='parent pt-2 px-3'>Zinger Buger</h2>
                                    <div className='px-3 pt-2'>
                                        <del className='pe-2'>$19.99</del>
                                        <ins>$14.99</ins>
                                        <div className='text-center mt-3'>
                                            <Link id='link1' className='text-decoration-none py-2 px-4'>Add To Cart</Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={24} sm={12} md={12} lg={8}>
                                <div className='collection_card rounded-4 pb-4'>
                                    <img src={img3} alt="Collection_Image" className='img-fluid rounded-4 w-100' />
                                    <h2 className='parent pt-2 px-3'>Paty Burger</h2>
                                    <div className='px-3 pt-2'>
                                        <ins>$14.99</ins>
                                        <div className='text-center mt-3'>
                                            <Link id='link1' className='text-decoration-none py-2 px-4'>Add To Cart</Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={24} sm={12} md={12} lg={8}>
                                <div className='collection_card rounded-4 pb-4'>
                                    <img src={img4} alt="Collection_Image" className='img-fluid rounded-4 w-100' />
                                    <h2 className='parent pt-2 px-3'>Burger and fries</h2>
                                    <div className='px-3 pt-2'>
                                        <ins>$14.99</ins>
                                        <div className='text-center mt-3'>
                                            <Link id='link1' className='text-decoration-none py-2 px-4'>Add To Cart</Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={24} sm={12} md={12} lg={8}>
                                <div className='collection_card rounded-4 pb-4'>
                                    <img src={img5} alt="Collection_Image" className='img-fluid rounded-4 w-100' />
                                    <h2 className='parent pt-2 px-3'>chicken Tandory</h2>
                                    <div className='px-3 pt-2'>
                                        <del className='pe-2'>$19.99</del>
                                        <ins>$14.99</ins>
                                        <div className='text-center mt-3'>
                                            <Link id='link1' className='text-decoration-none py-2 px-4'>Add To Cart</Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={24} sm={12} md={12} lg={8}>
                                <div className='collection_card rounded-4 pb-4'>
                                    <img src={img6} alt="Collection_Image" className='img-fluid rounded-4 w-100' />
                                    <h2 className='parent pt-2 px-3'>Garel Burger</h2>
                                    <div className='px-3 pt-2'>
                                        <ins>$14.99</ins>
                                        <div className='text-center mt-3'>
                                            <Link id='link1' className='text-decoration-none py-2 px-4'>Add To Cart</Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={24} sm={12} md={12} lg={8}>
                                <div className='collection_card rounded-4 pb-4'>
                                    <img src={img7} alt="Collection_Image" className='img-fluid rounded-4 w-100' />
                                    <h2 className='parent pt-2 px-3'>Veg Burger</h2>
                                    <div className='px-3 pt-2'>
                                        <ins>$14.99</ins>
                                        <div className='text-center mt-3'>
                                            <Link id='link1' className='text-decoration-none py-2 px-4'>Add To Cart</Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={24} sm={12} md={12} lg={8}>
                                <div className='collection_card rounded-4 pb-4'>
                                    <img src={img8} alt="Collection_Image" className='img-fluid rounded-4 w-100' />
                                    <h2 className='parent pt-2 px-3'>Chowmein</h2>
                                    <div className='px-3 pt-2'>
                                        <del className='pe-2'>$19.99</del>
                                        <ins>$14.99</ins>
                                        <div className='text-center mt-3'>
                                            <Link id='link1' className='text-decoration-none py-2 px-4'>Add To Cart</Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={24} sm={12} md={12} lg={8}>
                                <div className='collection_card rounded-4 pb-4'>
                                    <img src={img9} alt="Collection_Image" className='img-fluid rounded-4 w-100' />
                                    <h2 className='parent pt-2 px-3'>Desi Tali</h2>
                                    <div className='px-3 pt-2'>
                                        <ins>$14.99</ins>
                                        <div className='text-center mt-3'>
                                            <Link id='link1' className='text-decoration-none py-2 px-4'>Add To Cart</Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={24} sm={12} md={12} lg={8}>
                                <div className='collection_card rounded-4 pb-4'>
                                    <img src={img10} alt="Collection_Image" className='img-fluid rounded-4 w-100' />
                                    <h2 className='parent pt-2 px-3'>Chicken Burger</h2>
                                    <div className='px-3 pt-2'>
                                        <ins>$14.99</ins>
                                        <div className='text-center mt-3'>
                                            <Link id='link1' className='text-decoration-none py-2 px-4'>Add To Cart</Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={24} sm={12} md={12} lg={8}>
                                <div className='collection_card rounded-4 pb-4'>
                                    <img src={img11} alt="Collection_Image" className='img-fluid rounded-4 w-100' />
                                    <h2 className='parent pt-2 px-3'>Deals 1</h2>
                                    <div className='px-3 pt-2'>
                                        <del className='pe-2'>$19.99</del>
                                        <ins>$14.99</ins>
                                        <div className='text-center mt-3'>
                                            <Link id='link1' className='text-decoration-none py-2 px-4'>Add To Cart</Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={24} sm={12} md={12} lg={8}>
                                <div className='collection_card rounded-4 pb-4'>
                                    <img src={img12} alt="Collection_Image" className='img-fluid rounded-4 w-100' />
                                    <h2 className='parent pt-2 px-3'>Pasta</h2>
                                    <div className='px-3 pt-2'>
                                        <ins>$14.99</ins>
                                        <div className='text-center mt-3'>
                                            <Link id='link1' className='text-decoration-none py-2 px-4'>Add To Cart</Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={24} sm={12} md={12} lg={8}>
                                <div className='collection_card rounded-4 pb-4'>
                                    <img src={img13} alt="Collection_Image" className='img-fluid rounded-4 w-100' />
                                    <h2 className='parent pt-2 px-3'>Paty Burger</h2>
                                    <div className='px-3 pt-2'>
                                        <ins>$14.99</ins>
                                        <div className='text-center mt-3'>
                                            <Link id='link1' className='text-decoration-none py-2 px-4'>Add To Cart</Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={24} sm={12} md={12} lg={8}>
                                <div className='collection_card rounded-4 pb-4'>
                                    <img src={img14} alt="Collection_Image" className='img-fluid rounded-4 w-100' />
                                    <h2 className='parent pt-2 px-3'>Beaf Burger</h2>
                                    <div className='px-3 pt-2'>
                                        <del className='pe-2'>$19.99</del>
                                        <ins>$14.99</ins>
                                        <div className='text-center mt-3'>
                                            <Link id='link1' className='text-decoration-none py-2 px-4'>Add To Cart</Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={24} sm={12} md={12} lg={8}>
                                <div className='collection_card rounded-4 pb-4'>
                                    <img src={img15} alt="Collection_Image" className='img-fluid rounded-4 w-100' />
                                    <h2 className='parent pt-2 px-3'>Chowmein</h2>
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
            </Fade>
        </main>
  )
}

export default GalleryImage