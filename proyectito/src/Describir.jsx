import React, { useState } from "react";


function Describir(){
  const [nombre, setNombre] = useState("");
  const [resultado, setResultado] = useState("");

  const handleChange = (event) => {
    setNombre(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setResultado(`${nombre} es un (adjetivo)`)
    setNombre("");
  };

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