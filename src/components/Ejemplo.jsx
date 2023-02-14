// Crear componente de tipo función y acceder a su estado 
// usando Hooks y poder modificarlo

import React, {useState} from 'react'

const Ejemplo = () => {

  // Valor inicial contador
  const ValorInicial = 0;

  // Valor inicial persona
  const PersonaInicial = {
    nombre : 'Martin',
    email: 'ejemplo@hotmail.com'
  }

  // Queremos que el ValorInicial y PersonalInicial, sean parte del componente y así poder modificar su cambio
  // y reflejar la vista del componente. 

  // const [nombreVariable, funcionParaCambiar] = useState(ValorInicial)

  const [contador, setContador] = useState(ValorInicial);
  const [persona, setPersona] = useState(PersonaInicial);

  // Función para actualizar el estado privado drl contador
  const incrementarContador = () => {
    // funcion para cambiar (nuevo valor)
    setContador(contador + 1);
  }

  // Funcion para actualizar persona del componente
  const actualizarPersona = () => {
    setPersona({nombre: 'Erik', email: 'Cambio@hotmail.com'})
  }

  return (
    <>
    <div>
      <h1>*** Ejemplo de useState() ***</h1>
      <h2>CONTADOR: {contador}</h2>
      <h2>DATOS DE LA PERSONA</h2>
      <h3>NOMBRE: {persona.nombre}</h3>
      <h3>NOMBRE: {persona.email}</h3>
    </div>


    <div>
      <button onClick={incrementarContador}>Incrementar Contador</button>
      <button onClick={actualizarPersona}>Incrementar Contador</button>
    </div>
    </>

    
  );
}

export default Ejemplo;
