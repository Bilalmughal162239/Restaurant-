import { Col, Row, Typography } from 'antd'
import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faThumbsUp } from '@fortawesome/free-regular-svg-icons'
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons'

const { Title, Paragraph } = Typography
const Discover = () => {
    return (
        <main className='Discover'>
            <Fade>
                <section className='py-5'>
                    <div className="container pt-sm-1 pt-md-2 pt-lg-4">
                        <Row>
                            <Col span={24}>
                                <Title level={1} className='fs-1 text-center'>
                                    Discover Fork & Fire
                                </Title>
                                <Paragraph className='text-center h5'>
                                    At Fork & Fire, we are dedicated to providing top-quality restaurant <br /> supplies that empower culinary creativity and excellence.
                                </Paragraph>
                            </Col>
                        </Row>
                        <Row className='py-3'>
                            <Col sm={24} md={12} lg={8}>
                                <div className='mx-2 my-2'>
                                    <div className="card p-3">
                                        <FontAwesomeIcon icon={faStar} className='fs-1' />
                                        <Title level={1} className='fs-1 pt-2 pb-1 text-center'> Our Mission</Title>
                                        <Paragraph className='para'>To provide top-notch restaurant supplies that inspire creativity and elevate the culinary experience for professionals and home cooks alike. We aim to be your trusted partner in the kitchen.</Paragraph>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={24} md={12} lg={8}>
                                <div className='mx-2 my-2'>
                                    <div className="card p-3">
                                        <FontAwesomeIcon icon={faThumbsUp} className='fs-1' />
                                        <Title level={1} className='fs-1 pt-2 pb-1 text-center'> Our Values</Title>
                                        <Paragraph className='para'>We prioritize quality, customer focus, innovation, and sustainability in everything we do. Our commitment to these values ensures that we deliver the best products and services to our customers.</Paragraph>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={24} md={12} lg={8}>
                                <div className='mx-2 my-2'>
                                    <div className="card p-3">
                                    <FontAwesomeIcon icon={faRotateLeft} className='fs-1' />
                                        <Title level={1} className='fs-1 pt-2 pb-1 text-center'>Our Story</Title>
                                        <Paragraph className='para'>Founded in 2023, Fork & Fire emerged from a passion for culinary excellence. Our team of experts curates a selection of products that meet the highest standards of quality and performance.</Paragraph>
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

export default Discover