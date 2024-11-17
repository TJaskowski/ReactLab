import React from 'react'
import { useNavigate } from 'react-router-dom'
import { redirect } from 'react-router-dom';
function Lab4Page() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={ e => navigate("/lab4/add")}>dodaj</button>
    </div>

  )
}

export default Lab4Page
// React Hook Form