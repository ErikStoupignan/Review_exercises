// Crear componente de tipo función y acceder a su estado 
// usando Hooks y poder modificarlo

import React, {useState, useRef, useEffect, useContext} from 'react'

//  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// EJEMPLO 1 
// useState
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
      <button onClick={actualizarPersona}>Actualizar Datos Persona</button>
    </div>
    </>

    
  );
}

//  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// EJEMPLO 2
// useRef, useEffect y useState
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

//  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// EJEMPLO 3

// Iniciamos un estado vacio que se rellará con los datos del contexto del padre
const miContexto = React.createContext(null)

// Componente 1 tendra un CONTEXTO que recibe del padre
const Componente1 = () => {
  
  const state = useContext(miContexto);

  return (
    <div>
        <h1>El token es: {state.token}</h1>
        {/* Imprimos el componente 2 */}
        <Componente2 />
    </div>
  )
}

const Componente2 = () => {

  const state = useContext(miContexto);

  return (
    <div>
        <h2>La sesión es: {state.sesion}</h2>
    </div>
  )
}

export default function MiComponenteConContexto() {

  const estadoInicial ={
    token: '12334567',
    sesion: 1
  }

  // Creamos el estado de este componente
  const [sessionData, setSessionData] = useState(estadoInicial);

  function actualizarSesion() {
    setSessionData(
      {
        token: 'ERIKSTOUPIGNAN',
        sesion: sessionData.sesion + 1
      }
    );
  }

  return (
    <miContexto.Provider value={sessionData}>
      <h1>*** Ejemplo de useState() & useContext() ***</h1>

      {/* Todo lo que este aquí adentro puede leer los datos de sessionData */}
      {/* Ademas, si se actualiza, los componentes de aquí, también lo actualizan */}
      <Componente1 />
      <button onClick={actualizarSesion}>Actualizar Sesión</button>
    </miContexto.Provider>
  )
}





export {Ejemplo, Ejemplo2, MiComponenteConContexto as Ejemplo3};
