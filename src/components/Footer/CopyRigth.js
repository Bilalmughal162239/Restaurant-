import { Col, Row, Typography } from 'antd'
import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faApple, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
const { Paragraph } = Typography
const CopyRigth = () => {
  const year = new Date().getFullYear()
  return (
    <footer className='CopyRigth' >
      <Fade>
        <section className='py-5'>
          <div className="container">
            <Row>
              <Col sm={24} md={12} lg={8}>
                <Paragraph>&copy; {year} Fork & Fire. All rights reserved.</Paragraph>
              </Col>
              <Col sm={24} md={12} lg={8}>
                <Paragraph>Create By |<span className='text-primary'> Muhammad Bilal</span></Paragraph>
              </Col>
              <Col sm={24} md={12} lg={8}>
                <div className="FontIcon">
                 <Link> <FontAwesomeIcon icon={faFacebook} id='facebook' /></Link>
                 <Link> <FontAwesomeIcon icon={faGithub} id='github' /></Link>
                 <Link><FontAwesomeIcon icon={faApple} id='apple' /></Link>
                 <Link> <FontAwesomeIcon icon={faTwitter} id='twitter' /></Link>
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </Fade>
    </footer>
  )
}

export default CopyRigth