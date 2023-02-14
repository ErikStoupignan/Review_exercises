import React from 'react'

export default function Props() {
  return (
    <>
      <h1>*** Ejemplo de props ***</h1>
      <h3>** Button component **</h3>
      <Botón texto="Haga clic aquí para registrarse" />
      <Botón texto="Comprar ahora" />
      <hr />
      <h3>** PrintName component **</h3>
      <PrintName name='Erik' lastName='Stoupignan'/>
      <hr />
      <h3>** PrintLastName component **</h3>
      <PrintLastName lastName='Stoupignan'/>
      <h3>** PrintName & PrintLastName component together **</h3>
      <span>{
        <>
          <PrintName name='Erik' lastName='Stoupignan'/>
          <PrintLastName lastName='Stoupignan'/>
        </>
      }</span>
    </>
    )
}

// Renderiza un botton
function Botón(props) {
  return (
    <button>{props.texto}</button>
  );
}

// Renderiza texto en un h1 
function PrintName(props) {
  return (
    <h4>{props.name}</h4>
  );
}

// Renderiza texto en un h1 
function PrintLastName(props) {
  return (
    <h4>{props.lastName}</h4>
  );
}



