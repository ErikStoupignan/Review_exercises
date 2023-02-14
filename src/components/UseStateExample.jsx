// Crear componente de tipo función y acceder a su estado 
// usando Hooks y poder modificarlo

import React, {useState, useRef, useEffect} from 'react'

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

const Ejemplo2 = () => {
  const [contador1, setContador1] = useState(0);
  const [contador2, setContador2] = useState(0);

  // Crear referencia con useRef() para asociar una variable con un elemento
  // del DOM para renderizar HTML
  const myRef = useRef();

  // Funciones para incrementar contadores por separados
  function incrementar1() {
    setContador1(contador1 + 1)
  }

  function incrementar2() {
    setContador2(contador2 + 1)
  }

  // Crear useEffect para crear dos casos
  // Si hay un cambio en el estado del componente, se ejecuta aquello que este dentro 
  // del useEffect()

  // CASO 1
  // SIEMPRE QUE HAY UN CAMBIO, SE EJECUTA EL USEEFFECT()
  useEffect(() => {
      console.log('----------------------------------');
      console.log('Cambio en el estado de cualquier componente');
      console.log('Mostrando referencia del DOM:');
      console.log(myRef);
    })

  // CASO 2
  // SOLO SE EFECUTA CUANDO SE REGISTRA UN CAMBIO EN EL CONTADOR 1
  useEffect(() => {
      console.log('----------------------------------');
      console.log('CAMBIO EL CONTADOR 1');
    },[contador1])

  // CASO 3
  // SOLO SE EFECUTA CUANDO SE REGISTRA UN CAMBIO EN EL CONTADOR 2
  useEffect(() => {
    console.log('----------------------------------');
    console.log('CAMBIO EL CONTADOR 2');
  },[contador2])
    
    return (
      <div>
        <h1>*** Ejemplo de useState(), useRef() y useEffect() ***</h1>
        <h2>CONTADOR 1: {contador1}</h2>
        <h2>CONTADOR 2: {contador2}</h2>

        {/* Elemento referenciado ------------------------ */}
        <h4 ref={myRef}>
          Ejemplo de elemento referenciado
        </h4>

        {/* Botonera para renderizar bottones ------------ */}
        <div>
          <button onClick={incrementar1}>Incrementar Contador 1</button>
          <button onClick={incrementar2}>Incrementar Contador 2</button>
        </div>
      </div>
    );
}

export {Ejemplo, Ejemplo2};
