import axios from "axios";
import {  useState } from "react";
// import Ejemplo from "./components/Ejemplo";


function App () {

  const API = 'https://pokeapi.co/api/v2/pokemon/';

  const [data, setData] = useState('');

  // USANDO USEEFFECT
  // useEffect (() => {
  //   // const getData = async () => {
  //   //   try {
  //   //     const response = await axios.get(API);
  //   //     const output = [response.data.results]
  //   //     // console.log('OUTPUT:', output);
  //   //     setData(output);
  //   //     // data = output;
  //   //   } catch (error) {
  //   //     console.error(error);
  //   //   }
  //   // }

  //   // getData();
  // },[])

  const getData = async () => {
    try {
      const response = await axios.get(API);
      const output = [response.data.results]

      // Actualizo el estado
      setData(output);
    } catch (error) {
      console.error(error);
    }
  }

  getData();
  
  return (
    <div className="App">
      <h1>Hello</h1>
      {/* <Ejemplo /> */}

      <h3>DATA DEL API</h3>
      {
        data !==  ''
        ? data[0].map((pokemon) => (
          <h4 key={pokemon.url}>Nombre: {pokemon.name.charAt(0).toUpperCase()}{pokemon.name.slice(1)}</h4>
        ))
        : null
      }
      
    </div>
  );
}

export default App;
