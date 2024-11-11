import React from 'react'
import { Button } from 'react-bootstrap'

function PersonProfile( {person} ) {
  return (
    <>
      <div>
        <h3>{person.name}</h3>
        <h4>UserId: {person.id}</h4>
        <p>
            <span>Birthdate: {person.birth}</span>
            <span>Eyes: {person.eyes}</span>
        </p>
        <Button class="btn btn-primary" onClick={()=>{}}>Edit</Button>
        <Button class="btn btn-danger" onClick={()=>{}}>Delete</Button>
        <Button class="btn btn-warning" onClick={()=>{}}>Rate</Button>
      </div>
    </>
  )
}

export default PersonProfile
