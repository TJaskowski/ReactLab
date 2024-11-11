import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function FlexContainer({element: Element, data}) {
  return (
    <Container>
      <Row>
        {data.map((item) =>
            <Col  className='d-flex justify-content-center mb-4'>
                <Element key={item.id} {...item}/>
            </Col>
        )}
      </Row>
    </Container>
  )
}

export default FlexContainer
