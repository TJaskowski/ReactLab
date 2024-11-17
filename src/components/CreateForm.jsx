import React, { useState } from 'react'

function CreateForm() {
    const [errors, setErrors] = useState([]);
    const [isSending, setSending] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.target);

        if(data.get("taskName").charAt(0) == data.get("taskName").charAt(0).toUpperCase()){
            setErrors([...errors], "Nazwa zadania musi zaczynac sie wielka litera");
        }

        if(errors.length != 0){
            return;
        }

        setSending(true);
        await new Promise((resolve) => setTimeout(resolve, 2000)); // fetch, axios
        // dispatch({
        //     type: "add",
        //     data: //obiekt z danymi z formularza
        // });
        setSending(false);
        for(let key of data.keys()){
            e.target[key] = "";
        }
    }

  return (
    <>
      <form onSubmit={onSubmit}>
        <label for="taskName">Nazwa zadania</label>
        <input type="text" name="taskName" id='taskName' placeholder='Wpisz nazwe' />
        
        <button type='submit' disabled={isSending}>Zapisz</button>
      </form>
    </>
  )
}

export default CreateForm
