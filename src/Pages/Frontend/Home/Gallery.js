import { Col, Row } from 'antd'
import React from 'react'
import { Zoom } from 'react-awesome-reveal'

import gallery from '../../../asset/images/Home/Home/Gallery.png'
import gallery1 from '../../../asset/images/Home/Home/Gallery1.png'
import gallery2 from '../../../asset/images/Home/Home/Gallery2.png'
import gallery3 from '../../../asset/images/Home/Home/Gallery3.png'
import gallery4 from '../../../asset/images/Home/Home/Gallery4.png'
import gallery5 from '../../../asset/images/Home/Home/Gallery5.png'

const Gallery = () => {
    return (
        <main className='gallery'>
            <Zoom>
                <section className='pt-sm-1 pt-md-2 pt-lg-5 pb-5'>
                    <div className="container py-5">
                        <Row>
                            <Col span={24} className='text-center'>
                            <h1 className='fs-1'>Gallery Showcase</h1>
                            <p className='h5'>Discover how our products enhance your culinary experience with these <br /> stunning visuals.</p>
                            </Col>
                        </Row>
                        <Row className='pt-3'>
                            <Col sm={24} md={12} lg={8}>
                            <div className='mx-2 my-2'>
                                <img src={gallery} alt="Gallery_image"  id='gallery_images' className='img-fluid' />
                            </div>
                            </Col>
                            <Col sm={24} md={12} lg={8}>
                            <div className='mx-2 my-2'>
                                <img src={gallery1} alt="Gallery_image" id='gallery_images'  className='img-fluid' />
                            </div>
                            </Col>
                            <Col sm={24} md={12} lg={8}>
                            <div className='mx-2 my-2'>
                                <img src={gallery2} alt="Gallery_image" id='gallery_images'  className='img-fluid' />
                            </div>
                            </Col>
                            <Col sm={24} md={12} lg={8}>
                            <div className='mx-2 my-2'>
                                <img src={gallery3} alt="Gallery_image" id='gallery_images'  className='img-fluid' />
                            </div>
                            </Col>
                            <Col sm={24} md={12} lg={8}>
                            <div className='mx-2 my-2'>
                                <img src={gallery4} alt="Gallery_image" id='gallery_images'  className='img-fluid' />
                            </div>
                            </Col>
                            <Col sm={24} md={12} lg={8}>
                            <div className='mx-2 my-2'>
                                <img src={gallery5} alt="Gallery_image" id='gallery_images'  className='img-fluid' />
                            </div>
                            </Col>
                        </Row>
                    </div>
                </section>
            </Zoom>
        </main>
    )
}

export default Gallery