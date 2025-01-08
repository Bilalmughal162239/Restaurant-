import { Col, Row, Space } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const Exclusive = () => {
  return (
    <main className='Exclusive'>
      <section className='bg_img  pt-sm-1 pt-md-4 pt-lg-5'>
        <div id='overlayer' className="container">
          <Row>
            <Col span={24}>
              <h1 className='fs-1 text-center'>Exclusive Offers Await You</h1>
              <p className='text-center h4'>
                Discover amazing discounts on our top-quality restaurant supplies. Don't miss out <br /> on these limited-time deals designed just for you!
              </p>
              <div className='pt-sm-2 pt-md-3 pt-lg-5 text-center'>
                <Space>
                  <Link id='Excllusive_link' className=' text-center rounded-3 fs-6'>Shope Now</Link>
                  <Link id='Excllusive_link1' className=' text-center rounded-3 fs-6'>Leran More</Link>
                </Space>
              </div>
            </Col>
          </Row>
        </div>

      </section>
    </main>
  )
}

export default Exclusive