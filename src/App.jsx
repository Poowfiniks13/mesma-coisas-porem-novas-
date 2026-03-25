import { useState } from 'react'

import './App.css'
import Hohoho from './componentes/Hohoho';
import Reprovado from './componentes/Reprovado';
import Bomba from './componentes/Bomba';
import Bondinho from './componentes/Bondinho';
import Pum from './componentes/Pum';
import Combustivel from './componentes/Combustivel';
import Lesmas from './componentes/Lesmas';
import Cinema from './componentes/Cinema';
import CaixaFrutas from './componentes/Caixafrutas';
import Martins from './componentes/Martins';
import GrandeAvisador from './componentes/Grandeavisador';
import ConversorTemperatura from './componentes/ConversorTemperatura';


function App(){
  
  const [inputNome, setinputName] = useState ('')
  function cadastrar() { 
  console.log ("cadastrando: " + inputNome);
  }
  return (
    <>

      <h1>inputs controlados</h1>
      Nome <input type="text"
      Value={inputNome}
      onChange={(e) => setinputName (e.target.value)} />

<br />
      <button onClick={cadastrar}>cadastrar</button>

    
    <ConversorTemperatura/>

    </>
    
  )
}

export default App

