import React from 'react'
import { Card, Col, Row } from 'antd'
import { Zoom } from 'react-awesome-reveal'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'

const Boximge = () => {
    return (
        <main className='Boximage'>
            <Zoom>
                <section className='py-5'>
                    <Container>
                        <Row>
                          <Col xs={24} md={6} lg={8}>
                              <Card className="border-0">
                              <div id='imagebox' className='box'>
                                    <Link to='/gallery' className='heading'><h1 className='heading text-white pb-3'>Food Supplies</h1></Link>
                                    <Link to='/gallery' className='py-3 px-4 rounded-4 ' id='Hero_link'>Shop Now</Link>
                                </div>
                              </Card>                          
                          </Col>
                        
                          <Col xs={24} md={6} lg={8}>
                              <Card className="border-0">
                              <div id='imagebox1' className='box'>
                                    <Link to='/gallery' className='heading'><h1 className='heading text-white pb-3'>Food Supplies</h1></Link>
                                    <Link to='/gallery' className='py-3 px-4 rounded-4 ' id='Hero_link'>Shop Now</Link>
                                </div>
                              </Card>                          
                          </Col>
                          <Col xs={24} md={6} lg={8}>
                              <Card className="border-0">
                              <div id='imagebox2' className='box'>
                                    <Link to='/gallery' className='heading'><h1 className='heading text-white pb-3'>Food Supplies</h1></Link>
                                    <Link to='/gallery' className='py-3 px-4 rounded-4 ' id='Hero_link'>Shop Now</Link>
                                </div>
                              </Card>                          
                          </Col>
                        </Row>
                        <Row>
                        </Row>
                        <Row>
                        </Row>
                    </Container>
                </section>
            </Zoom>
        </main>
    )
}

export default Boximge