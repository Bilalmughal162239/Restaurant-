import { Col, Row, Space, Typography } from 'antd'
import React from 'react'
import { Fade } from 'react-awesome-reveal'

import img1 from '../../../asset/images/About/1.png'
import img2 from '../../../asset/images/About/2.png'
import img3 from '../../../asset/images/About/3.png'
import img4 from '../../../asset/images/About/4.png'
import img5 from '../../../asset/images/About/5.png'
import img6 from '../../../asset/images/About/6.png'
import img7 from '../../../asset/images/About/7.png'
import img8 from '../../../asset/images/About/8.png'
import { Link } from 'react-router-dom'
import { faFacebook, faSquareTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const { Title, Paragraph } = Typography
const Experts = () => {
    return (
        <main className='Expers'>
            <Fade>
                <section className='py-5 '>
                    <div className="container">
                        <Row>
                            <Col span={24}>
                                <Title level={1} className='fs-1'>
                                    Our Experts
                                </Title>
                                <Paragraph className='h5'>
                                    Meet the passionate team behind Fork & Fire, dedicated to quality.
                                </Paragraph>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={24} sm={12} md={8} lg={6}>
                                <div className='card_Expert my-2 mx-2'>
                                    <div className="card-header">
                                        <img id='Expert_img' src={img1} className='img-fluid' alt="Experts_Team_Members1" />
                                    </div>
                                    <div className='card-body px-2'>
                                        <div className="card-title h3">David Smith</div>
                                        <h6 className='pt-3'>Financial Analyst</h6>
                                        <div className="card-text">
                                            <Paragraph className='para'>David analyzes our financial performance and helps in strategic planning.</Paragraph>
                                        </div>
                                    </div>
                                    <div className="card-footer px-2 pb-2">
                                        <Space className='my-2'>
                                            <Link><FontAwesomeIcon icon={faSquareTwitter} id='Expert_icons' className='fs-4' /></Link>
                                            <Link><FontAwesomeIcon icon={faFacebook} id='Expert_icons' className='fs-4' /></Link>
                                        </Space>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={24} sm={12} md={8} lg={6}>
                                <div className='card_Expert my-2 mx-2'>
                                    <div className="card-header">
                                        <img id='Expert_img' src={img2} className='img-fluid' alt="Experts_Team_Members1" />
                                    </div>
                                    <div className='card-body px-2'>
                                        <div className="card-title h3">Alice Johnson</div>
                                        <h6 className='pt-3'>Founder & CEO</h6>
                                        <div className="card-text">
                                            <Paragraph className='para'>With over 15 years of experience in the culinary industry, Alice leads Fork & Fire with a vision .</Paragraph>
                                        </div>
                                    </div>
                                    <div className="card-footer px-2 pb-2">
                                        <Space className='my-2'>
                                            <Link><FontAwesomeIcon icon={faSquareTwitter} id='Expert_icons' className='fs-4' /></Link>
                                            <Link><FontAwesomeIcon icon={faFacebook} id='Expert_icons' className='fs-4' /></Link>
                                        </Space>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={24} sm={12} md={8} lg={6}>
                                <div className='card_Expert my-2 mx-2'>
                                    <div className="card-header">
                                        <img id='Expert_img' src={img3} className='img-fluid' alt="Experts_Team_Members1" />
                                    </div>
                                    <div className='card-body px-2'>
                                        <div className="card-title h3">Emily Davis</div>
                                        <h6 className='pt-3'>Logistics Coordinator</h6>
                                        <div className="card-text">
                                            <Paragraph className='para'>Emily manages our supply chain and logistics, ensuring timely delivery of products to our customers.</Paragraph>
                                        </div>
                                    </div>
                                    <div className="card-footer px-2 pb-2">
                                        <Space className='my-2'>
                                            <Link><FontAwesomeIcon icon={faSquareTwitter} id='Expert_icons' className='fs-4' /></Link>
                                            <Link><FontAwesomeIcon icon={faFacebook} id='Expert_icons' className='fs-4' /></Link>
                                        </Space>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={24} sm={12} md={8} lg={6}>
                                <div className='card_Expert my-2 mx-2'>
                                    <div className="card-header">
                                        <img id='Expert_img' src={img4} className='img-fluid' alt="Experts_Team_Members1" />
                                    </div>
                                    <div className='card-body px-2'>
                                        <div className="card-title h3">Mark Thompson</div>
                                        <h6 className='pt-3'>Head of Product Development</h6>
                                        <div className="card-text">
                                            <Paragraph className='para'>Mark is responsible for sourcing and developing our product lines, ensuring they meet the highest standards .</Paragraph>
                                        </div>
                                    </div>
                                    <div className="card-footer px-2 pb-2">
                                        <Space className='my-2'>
                                            <Link><FontAwesomeIcon icon={faSquareTwitter} id='Expert_icons' className='fs-4' /></Link>
                                            <Link><FontAwesomeIcon icon={faFacebook} id='Expert_icons' className='fs-4' /></Link>
                                        </Space>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={24} sm={12} md={8} lg={6}>
                                <div className='card_Expert my-2 mx-2'>
                                    <div className="card-header">
                                        <img id='Expert_img' src={img5} className='img-fluid' alt="Experts_Team_Members1" />
                                    </div>
                                    <div className='card-body px-2'>
                                        <div className="card-title h3">Laura Wilson</div>
                                        <h6 className='pt-3'>Content Creator</h6>
                                        <div className="card-text">
                                            <Paragraph className='para'>Laura creates engaging content that showcases our products and connects with our audience. </Paragraph>
                                        </div>
                                    </div>
                                    <div className="card-footer px-2 pb-2">
                                        <Space className='my-2'>
                                            <Link><FontAwesomeIcon icon={faSquareTwitter} id='Expert_icons' className='fs-4' /></Link>
                                            <Link><FontAwesomeIcon icon={faFacebook} id='Expert_icons' className='fs-4' /></Link>
                                        </Space>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={24} sm={12} md={8} lg={6}>
                                <div className='card_Expert my-2 mx-2'>
                                    <div className="card-header">
                                        <img id='Expert_img' src={img6} className='img-fluid' alt="Experts_Team_Members1" />
                                    </div>
                                    <div className='card-body px-2'>
                                        <div className="card-title h3">James Carter</div>
                                        <h6 className='pt-3'>Marketing Director</h6>
                                        <div className="card-text">
                                            <Paragraph className='para'>James crafts our marketing strategies, ensuring Fork & Fire reaches culinary enthusiasts everywhere.</Paragraph>
                                        </div>
                                    </div>
                                    <div className="card-footer px-2 pb-2">
                                        <Space className='my-2'>
                                            <Link><FontAwesomeIcon icon={faSquareTwitter} id='Expert_icons' className='fs-4' /></Link>
                                            <Link><FontAwesomeIcon icon={faFacebook} id='Expert_icons' className='fs-4' /></Link>
                                        </Space>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={24} sm={12} md={8} lg={6}>
                                <div className='card_Expert my-2 mx-2'>
                                    <div className="card-header">
                                        <img id='Expert_img' src={img7} className='img-fluid' alt="Experts_Team_Members1" />
                                    </div>
                                    <div className='card-body px-2'>
                                        <div className="card-title h3">Sarah Lee</div>
                                        <h6 className='pt-3'>Customer Service Manager</h6>
                                        <div className="card-text">
                                            <Paragraph className='para'>Sarah is dedicated to providing exceptional support to our customers, helping them find the right products.</Paragraph>
                                        </div>
                                    </div>
                                    <div className="card-footer px-2 pb-2">
                                        <Space className='my-2'>
                                            <Link><FontAwesomeIcon icon={faSquareTwitter} id='Expert_icons' className='fs-4' /></Link>
                                            <Link><FontAwesomeIcon icon={faFacebook} id='Expert_icons' className='fs-4' /></Link>
                                        </Space>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={24} sm={12} md={8} lg={6}>
                                <div className='card_Expert my-2 mx-2'>
                                    <div className="card-header">
                                        <img id='Expert_img' src={img8} className='img-fluid' alt="Experts_Team_Members1" />
                                    </div>
                                    <div className='card-body px-2'>
                                        <div className="card-title h3">Michael Brown</div>
                                        <h6 className='pt-3'>Sales Executive</h6>
                                        <div className="card-text">
                                            <Paragraph className='para'>Michael is focused on building relationships with our clients and driving sales growth.</Paragraph>
                                        </div>
                                    </div>
                                    <div className="card-footer px-2 pb-2">
                                        <Space className='my-2'>
                                            <Link><FontAwesomeIcon icon={faSquareTwitter} id='Expert_icons' className='fs-4' /></Link>
                                            <Link><FontAwesomeIcon icon={faFacebook} id='Expert_icons' className='fs-4' /></Link>
                                        </Space>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row className='pt-sm-1 pt-md-3 pt-lg-5'>
                            <Col>
                            <Title level={1} className='fs-1'>Join Us</Title>
                            <Paragraph className='para h5 pt-2'>Discover more about our team and their commitment to excellence.</Paragraph>
                            <Link className='fs-4 py-2 px-3 my-2' id='Export_Link' >Learn More</Link>
                            </Col>
                        </Row>
                    </div>
                </section>
            </Fade>
        </main>
    )
}

export default Experts