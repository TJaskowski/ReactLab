import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import RatingBar from './RatingBar';

function PersonProfile( {person} ) {
  const [rank, setRank] = useState(0);

  const rateClick = () => {
    if(rank === 0){
      setRank(10);
    } else if(rank === 10){
      setRank(1);
    } else {
      setRank(rank + 1);
    }
  }
  return (
    <>
      <div>
        <h3>{person.name}</h3>
        <h4>UserId: {person.id}</h4>
        <p>
            <span>Birthdate: {person.birth}</span>
            <span>Eyes: {person.eyes}</span>
        </p>
        <div className="d-flex justify-content-center align-items-center p-1" >
        <Button class="btn btn-primary" onClick={()=>{}}>Edit</Button>
        <Button class="btn btn-danger" onClick={()=>{}}>Delete</Button>
        <Button class="btn btn-warning" onClick={rateClick}>Rate </Button>
        </div>
        <RatingBar rate={rank}/>
      </div>
    </>
  )
}

export default PersonProfile
