import React, {useState} from 'react'

export default function PropsSonToFather() {
  return (
    <div>PropsSonToFather</div>
  )
}

// Componente Padre
function Padre() {
  // State para recibir el PROP del hijo atraves del state
  const [propDelHijo, setPropDelHijo] = useState(null);

  function handlePropDelHijo(prop) {
    // Guardar el prop del hijo en el estado del padre
    setPropDelHijo(prop);
  }

  return (
    <div>
      <h1>*** Ejemplo enviar PROP del HIJO al PADRE ***</h1>
      {/* Envia la función para recabar el prop del hijo */}
      <Hijo enviarProp={handlePropDelHijo} />

      <p>La prop del hijo es: {propDelHijo}</p>
    </div>
  );
}

// Componente Hijo
function Hijo(props) {
  const [propDelHijo] = useState('Valor de la prop del hijo');

  function handleClick() {
    // props.enviarProp es la forma en que el padre envió su función para recibir el prop del hijo
    props.enviarProp(propDelHijo);
  }

  return (
    <div>
      <p>Prop del hijo: {propDelHijo}</p>
      <button onClick={handleClick}>Enviar prop al padre</button>
    </div>
  );
}

export { Padre, Hijo}
