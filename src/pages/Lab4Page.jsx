import React from 'react'
import { useNavigate } from 'react-router-dom'
import { redirect } from 'react-router-dom';
function Lab4Page() {
  const navigate = useNavigate();
  return (
    <div>
      <button className='btn btn-primary btn-block btn-lg' onClick={ e => navigate("/lab4/add")}>Dodaj nowego użytkownika</button>
    </div>

  )
}

export default Lab4Page
