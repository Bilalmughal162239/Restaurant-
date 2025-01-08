import { Col, Row } from 'antd'
import React from 'react'
import { Zoom } from 'react-awesome-reveal'
import { Link } from 'react-router-dom'

const HotDeals = () => {
    return (
        <main className='HotDeals'>
            <Zoom>
                <section className='py-5'>
                    <div className="container-fluid">
                        <Row gutter={[12, 12]}>
                            <Col sm={24} md={12} lg={8}>
                                <div id='imagebox' className='box'>
                                    <Link className='heading'><h1 className='heading text-white pb-3'>Fast Foods </h1></Link>
                                    <Link to='/dealspage/dealspage1' className='py-3 px-4 rounded-4 ' id='Hero_link'>View Now</Link>
                                </div>
                            </Col>
                            <Col sm={24} md={12} lg={8}>
                                <div id='imagebox1' className='box'>
                                    <Link className='heading'><h1 className='heading text-white pb-3'>Italian</h1></Link>
                                    <Link to='/dealspage/dealspage2' className='py-3 px-4 rounded-4 ' id='Hero_link'>View Now</Link>
                                </div>
                            </Col>
                            <Col sm={24} md={12} lg={8}>
                                <div id='imagebox2' className='box'>
                                    <Link className='heading'><h1 className='heading text-white pb-3'>Desi Foods</h1></Link>
                                    <Link to='/dealspage/dealspage3' className='py-3 px-4 rounded-4 ' id='Hero_link'>View Now</Link>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>
            </Zoom>
        </main>
    )
}

export default HotDeals