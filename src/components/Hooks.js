import axios from "axios";
import { useState } from "react";

// import Ejemplo from "./components/Ejemplo";

// export function Components() {
//   const [data, setData] = useState(null);
//   const API = 'https://pokeapi.co/api/v2/pokemon/';

//   const getData = async () => {
//     try {
//       const response = await axios.get(API);
//       const output = [response.data.results]

//       // Actualizo el estado
//       setData(output);
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   getData();

//   return data;
// }

function Hooks () {
  const API = 'https://pokeapi.co/api/v2/pokemon/';
  const initialValue = undefined;
  const [data, setData] = useState(initialValue);

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

  // //   // getData();
  // // },[])

  const getData = async () => {
    try {
      const response = await axios.get(API);
      const output = [response.data.results];
      // Actualizo el estado
      setData(output);
    } catch (error) {
      console.error(error);
    }
  }

  getData();
  
  return (
    <div className="App">
      <h1>*** Ejemplo de hooks con useState() ***</h1>
      {/* <Ejemplo /> */}

      <h3>DATA DEL API</h3>
      {
        data !==  initialValue
        ? data[0].map((pokemon) => (
          <div key={pokemon.url}>
            <h4 >Name: {pokemon.name.charAt(0).toUpperCase()}{pokemon.name.slice(1)}</h4>
            <h4 >URL: {pokemon.url}</h4>
            <p> ------------------------------------------------------------------ </p>
          </div>
        ))
        : <h1>Loading!</h1>
      }
      
    </div>
  );
}

export default Hooks;
