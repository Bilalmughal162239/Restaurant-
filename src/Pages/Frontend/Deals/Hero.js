import { Col, Row,Typography } from 'antd'
import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { Link } from 'react-router-dom'
const { Title, Paragraph } = Typography
const Hero = () => {
    return (
        <>
            <main className='Hero_Deals'>
                <Fade>
                    <section className='Hero_section'>
                        <div className='container py-5'>
                            <Row className=''>
                                <Col xs={24} md={18} lg={12} className='pt-5'>
                                    <Title level={1} className='text-white fs-1 display-3'>
                                    Discover Our Latest Deals
                                    </Title>
                                    <Paragraph className='para text-white h5 mb-5'>
                                    Explore exclusive discounts on top-quality kitchen equipment, tableware, and food supplies. Don’t miss out on these limited-time offers to enhance your culinary experience.                                    </Paragraph>
                                    <Link className='py-3 px-4 rounded-4 bg-white text-dark' style={{textDecoration:"none"}}>View Offers</Link>
                                </Col>
                            </Row>
                        </div>
                    </section>
                </Fade>
            </main >
        </>
    )
}

export default Hero