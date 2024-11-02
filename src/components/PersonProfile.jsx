import React from 'react'

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
      </div>
    </>
  )
}

export default PersonProfile
