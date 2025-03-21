import React, { useState } from 'react';


function Describir() {
  const [nombre, setNombre] = useState('');

  const manejarCambio = (event) => {
    setNombre(event.target.value);
  }; 

  return(
    <div>
      <h1>Ingrese un nombre</h1>
      <input 
        type="text" 
        value = {nombre} 
        onChange = {manejarCambio} 
      />
      <p>{nombre} es un/a (adjetivo)</p>
      <button type='submit'>Enviar</button>
    </div>
    

  );

}


export default Describir;
