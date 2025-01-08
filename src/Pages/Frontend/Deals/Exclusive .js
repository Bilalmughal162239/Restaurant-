import { Col, Row } from 'antd'
import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { Link } from 'react-router-dom'

const Exclusive = () => {
    return (
        <main className='Exclusive_Deals'>
            <Fade>
                <section className='bg_img  pt-sm-1 pt-md-4 pt-lg-5'>
                    <div id='overlayer' className="container">
                        <Row>
                            <Col sm={24} md={15} lg={12}>
                                <h1 className='fs-1'>Exclusive Limited Time  Deals Await!</h1>
                                <p className='h4'>
                                Don’t miss out on our special offers designed to elevate your culinary experience. Act fast to grab these limited-time discounts on top-quality kitchen supplies.
                                </p>
                                <div className='pt-sm-2 pt-md-3 pt-lg-5'>
                                        <Link id='Excllusive_link' className=' text-center rounded-3 fs-6'>Shope Now and save</Link>
                                </div>
                            </Col>
                        </Row>
                    </div>

                </section>
            </Fade>
        </main>
    )
}

export default Exclusive 