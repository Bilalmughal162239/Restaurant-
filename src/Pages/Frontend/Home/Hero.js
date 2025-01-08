import React from 'react'
import { Col, Row, Typography } from 'antd'
import { Fade } from 'react-awesome-reveal'
import { Link } from 'react-router-dom'
import order from '../../../asset/images/Home/ordernow.png'



const { Title, Paragraph } = Typography
const Hero = () => {
  return (
    <>
      <main className='Hero'>
        <Fade>
          <section className='Hero_section'>
            <div className='container py-5'>
              <Row className=''>
                <Col xs={24} md={18} lg={12} className='pt-5'>
                  <Title level={1} className='text-white fs-1 display-3'>
                    Welcome to Fork & Fire
                  </Title>
                  <Paragraph className='para text-white h5 mb-5'>
                    Discover top-quality restaurant supplies and equipment to elevate your culinary creations. Explore our extensive range of products designed to meet the needs of professional chefs and home cooks alike.
                  </Paragraph>
                  <Link to='/gallery' className='py-3 px-4 rounded-4 ' id='Hero_link'>Shop Now</Link>
                </Col>
                <Col xs={24} md={18} lg={12}>
                  <img src={order} alt="Shop_Now" className='img-fluid float-end ms-auto w-75 pb-5' />
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