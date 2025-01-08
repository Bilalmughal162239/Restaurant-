import { Col, Row, Typography } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { Fade } from 'react-awesome-reveal'

const { Paragraph, Title } = Typography
const Share = () => {
  return (
    <footer>
      <Fade>
        <section className='py-4'>
          <div className="container">
            <Row className='pb-4'>
              <Col sm={12} md={8} lg={4}>
                <Link to='/' id='Footer_Link'><h3 className='pt-5 px-2'>Fork & Fire</h3></Link>
              </Col>
              <Col sm={12} md={8} lg={4}>
                <Title level={4} className='fs-3 pb-2'>Explore</Title>
                <Link to='/menu/burgur' className='text-muted' id='Navigate_link'>Menu</Link>
                <br />
                <Link to='/kitchenequipment' className='text-muted' id='Navigate_link'>Kitchen Equipment</Link>
                <br />
                <Link to='/tableware' className='text-muted' id='Navigate_link'>Tableware</Link>
              </Col>
              <Col sm={12} md={8} lg={4}>
                <Title level={4} className='fs-3 pb-2'>Company</Title>
                <Link to='/about' className='text-muted' id='Navigate_link'>About</Link>
                <br />
                <Link to='/contact' className='text-muted' id='Navigate_link'>Contact</Link>
                <br />
              </Col>
              <Col sm={12} md={8} lg={4}>
                <Title level={4} className='fs-3 pb-2'>Resources</Title>
                <Link to='/deals' className='text-muted' id='Navigate_link'>Deals</Link>
                <br />
                <Link to='/gallery' className='text-muted' id='Navigate_link'>Gallery</Link>
                <br />
              </Col>
              <Col sm={24} md={12} lg={8}>
                <Title level={4} className='fs-3 pb-2'>Subscribe to Our Newsletter</Title>
                <Paragraph className='text-muted'>
                  Stay updated with the latest deals and product launches.
                </Paragraph>
                <form style={{ display: "flex" }}>
                  <input className="form-control w-75" type="search" placeholder="Enter Your Email" />
                  <button className="btn btn-dark" type="submit">Subscribe</button>
                </form>
              </Col>
            </Row>
            <hr />
          </div>
        </section>
      </Fade>
    </footer>
  )
}

export default Share