import React, { useState } from "react";


function Describir(){
  const [nombre, setNombre] = useState("");
  const [resultado, setResultado] = useState("");

  const handleChange = (event) => {
    setNombre(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const indiceAleatorio = Math.floor(Math.random() * adjetivos.length);
    const adjetivoAleatorio = adjetivos[indiceAleatorio];

    setResultado(`${nombre} es un ${adjetivoAleatorio}`);
    setNombre("");
  };
  
  const adjetivos = [
    "putito/a", 
    "maricon/a", 
    "sucia/o", 
    "putita/o", 
    "gay", 
    "lesbiana", 
    "nerdazo/a", 
    "ñoño/a", 
  ];

  return(
    <div>
      <h1>Ingrese un nombre</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" value={nombre} onChange={handleChange}/>
        </label>
        <button type="submit">Enviar</button>
      </form>

      {}
      {resultado && <p>{resultado}</p>}
    </div>
  );

}


export default Describir;