import React from 'react'
import { Row, Col } from 'react-bootstrap'
// import Col from 'react-bootstrap/Col';

const NavBar = () => {
  return (
    <div className="w-100 bg-danger">
        <Row>
            <Col lg={2}>
                a
            </Col>
            <Col lg={3}>
                a
            </Col>
            
            <Col lg={7}>
                a
            </Col>
        </Row>
    </div>
  )
}

export default NavBar
