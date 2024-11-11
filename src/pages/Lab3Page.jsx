import React from 'react'
import { Card, CardText } from 'react-bootstrap'
import FlexContainer from '../components/FlexContainer'
import { data } from '../data/module-data'
function Lab3Page() {
    const Item = ({name, id}) => (
        <Card>
            <CardText>{name}</CardText>
        </Card>
    )
  return (
    <div>
      <h1>Laboratorium 3</h1>
      <FlexContainer element={Item} data={data}></FlexContainer>
    </div>
  )
}

export default Lab3Page
