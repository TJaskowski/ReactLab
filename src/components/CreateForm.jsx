import React, { useContext, useState } from 'react'
import AppContext from '../data/AppContext';
import { useNavigate } from 'react-router-dom';

function CreateForm() {
    const [errors, setErrors] = useState([]);
    const [isSending, setSending] = useState(false);
    const context = useContext(AppContext);
    const dispatch = context.dispatch;
    const navigate = useNavigate();

    const validate = (data) => {
      let newErrors = {};

      if(!data.get("name") || data.get("name").length < 3 || data.get("name").length > 40) {
        newErrors.name = "Imię użytkownika jest wymagane i musi mieć od 3 do 40 znaków.";
      }

      if (data.get("name") && data.get("name").charAt(0) === data.get("name").charAt(0).toLowerCase()) {
        newErrors.name = "Imię musi zaczynać się wielką literą.";
      }

      if (!data.get("birth")) {
        newErrors.birth = "Data urodzenia jest wymagana.";
      }

      if (!data.get("eyes") || data.get("eyes").length < 3 || data.get("eyes").length > 20) {
        newErrors.eyes = "Kolor oczu jest wymagany i musi mieć od 3 do 20 znaków.";
      }

      if(!data.get("rating") || data.get("rating") < 0 || data.get(rating) > 10){
        newErrors.rating = "Rating jest wymagany i musi być w zakresie od 0 do 10.";
      }
      
      return newErrors;
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.target);

        const newErrors = validate(data);
        if(Object.keys(newErrors).length > 0){
          setErrors(newErrors);
          return;
        }
        
        setSending(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
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
         setErrors({});
         navigate('/lab3', {replace: true});
    }

  return (
    <>
    <form onSubmit={onSubmit} className='text-primary'>
        <div className='mb-2'>
          <label htmlFor="name" className='form-label m-2'>Imię</label>
          {errors.name && <p className="text-danger">{errors.name}</p>}
          <input type="text" name='name' id='name' className='form-control' placeholder='Wpisz imię'/>
        </div>
        <div>
          <label htmlFor="birth" className='form-label m-2'>Data urodzenia</label>
          {errors.birth && <p className="text-danger">{errors.birth}</p>}
          <input type="date" name='birth' id='birth' className='form-control' placeholder='Podaj datę urodzenia' />
        </div>
        <div>
          <label htmlFor="eyes" className='form-label m-2'>Kolor oczu</label>
          {errors.eyes && <p className="text-danger">{errors.eyes}</p>}
          <input type="text" name="eyes" id="eyes" className='form-control' placeholder='Wpisz kolor oczu' />
        </div>
        <div>
          <label htmlFor="rating" className='form-label m-2'>Rating</label>
          {errors.rating && <p className="text-danger">{errors.rating}</p>}
          <input type="number" name='rating' id='rating' className='form-control' placeholder='Podaj rating od 1 do 10' min="0" max="10"/>
        </div>
        <button className='btn btn-primary mt-2 mr-2' type='submit' disabled={isSending}>Zapisz</button>
        <button className='btn btn-secondary mt-2 ' type='reset'>Wyczyść</button>
    </form>
    </>
  )
}

export default CreateForm
