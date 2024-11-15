import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useReducer } from 'react'
import AppReducer from '../data/AppReducer'

function FlexContainer({element: Element, data}) {
    const [items, dispatch] = useReducer(AppReducer, data);
  return (
    <Container>
      <Row>
        {items.map((item) =>
            <Col key={item.id} className='d-flex justify-content-center mb-4'>
                <Element person={item} dispatch={dispatch}/>
            </Col>
        )}
      </Row>
    </Container>
  )
}

export default FlexContainer
