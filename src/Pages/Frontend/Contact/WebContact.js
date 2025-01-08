import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Col, Row, Typography } from 'antd'
import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { Link } from 'react-router-dom'

const { Title, Paragraph } = Typography
const WebContact = () => {
    return (
        <main className='Contact_Us mb-0'>
            <Fade>
                <section className='py-5'>
                    <div className="container pt-sm-2 pt-md-3 pt-lg-5">
                        <Row>
                            <Col span={24}>
                                <Title level={5} className='text-muted'>Contant Us</Title>
                                <Title level={1} className='fs-1'>We're Here to Help!</Title>
                                <Paragraph className='h5'>Reach out to us for any inquiries or support regarding our products and services.</Paragraph>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={24} md={12} lg={8}>
                                <div className='card p-3 mx-2 my-2'>
                                    <FontAwesomeIcon icon={faEnvelope} className='fs-3 my-2' />
                                    <Title level={2} className='mb-0 text-center'>Email Us</Title>
                                    <Paragraph>For any questions or support, feel free to reach out via email a <Link style={{ textDecoration: "none" }}>muhammadbilal162239@gamil.com</Link>  </Paragraph>
                                </div>
                            </Col>
                            <Col sm={24} md={12} lg={8}>
                                <div className='card p-3 mx-2 my-2'>
                                    <FontAwesomeIcon icon={faPhone} className='fs-3 my-2' />
                                    <Title level={2} className='mb-0 text-center'>Calls Us</Title>
                                    <Paragraph>Our customer service team is available at <b>+92 03237003832</b>. Don't hesitate to give us a call!</Paragraph>
                                </div>
                            </Col>
                            <Col sm={24} md={12} lg={8}>
                                <div className='card p-3 mx-2 my-2'>
                                    <FontAwesomeIcon icon={faLocationDot} className='fs-3 my-2' />
                                    <Title level={2} className='mb-0 text-center'>Visit Us</Title>
                                    <Paragraph>You can find us at Malikpur 203 RB Faisalabad. We look forward to seeing you!</Paragraph>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>
            </Fade>
        </main>
    )
}

export default WebContact