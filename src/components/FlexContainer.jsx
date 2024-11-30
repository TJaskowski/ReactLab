import React, { useContext } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AppContext from '../data/AppContext'

function FlexContainer({element: Element}) {
   const context = useContext(AppContext);
   const items = context.items;
  return (
    <Container>
      <Row>
        {items.map((item) =>
            <Col key={item.id} className='d-flex justify-content-center mb-4'>
                <Element  person={item} />
            </Col>
        )}
      </Row>
    </Container>
  )
}

export default FlexContainer
