import React, { useContext, useState } from 'react'
import AppContext from '../data/AppContext';
import { useNavigate } from 'react-router-dom';

function CreateForm() {
    const [errors, setErrors] = useState([]);
    const [isSending, setSending] = useState(false);
    const context = useContext(AppContext);
    const dispatch = context.dispatch;
    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        
        if(data.get("name").charAt(0) == data.get("name").charAt(0).toLowerCase()){
            setErrors([...errors, "Nazwa zadania musi zaczynac sie wielka litera"]);
            return;
        }
        // if(errors.length != 0){ 
        //     return;
        // }

        setSending(true);
        await new Promise((resolve) => setTimeout(resolve, 1000)); // fetch, axios
        dispatch({
            type: "add",
            data: {
              id: Date.now(),  
              name: data.get("name"),
              birth: data.get("birth"),
              eyes: data.get("eyes"),
              rating: Number(data.get("rating")),
            }
        });
        setSending(false);
         e.target.reset();
         
         navigate('/lab3', {replace: true});
    }

  return (
    <>
    <form onSubmit={onSubmit} className='text-primary'>
        <div className="text-danger">
          {errors.map((e, i) => <p key={i}>{e}</p>)}
        </div>
        <div className='mb-2'>
          <label htmlFor="name" className='form-label m-2'>Imię</label>
          <input type="text" name='name' id='name' className='form-control' placeholder='Wpisz imię'/>
        </div>
        <div>
          <label htmlFor="birth" className='form-label m-2'>Data urodzenia</label>
          <input type="date" name='birth' id='birth' className='form-control' placeholder='Podaj datę urodzenia' />
        </div>
        <div>
          <label htmlFor="eyes" className='form-label m-2'>Kolor oczu</label>
          <input type="text" name="eyes" id="eyes" className='form-control' placeholder='Wpisz kolor oczu' />
        </div>
        <div>
          <label htmlFor="rating" className='form-label m-2'>Rating</label>
          <input type="number" name='rating' id='rating' className='form-control' placeholder='Podaj rating od 1 do 10' min="0" max="10"/>
        </div>
        <button className='btn btn-primary mt-2 mr-2' type='submit' disabled={isSending}>Zapisz</button>
        <button className='btn btn-secondary mt-2 ' type='reset'>Wyczyść</button>
    </form>
    </>
  )
}

export default CreateForm
