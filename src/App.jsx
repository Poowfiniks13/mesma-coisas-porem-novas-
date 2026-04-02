import { useState } from 'react'

import './App.css'
import Home from './pages/home';
import Contato from './pages/Contato';
import Produtos from './pages/Produtos';

function App(){
  const [tela, setTela] = useState (<Home />)

  return (
    <div className="cont-app">
      <header className="cont-header">
        <nav>
          <button className={'botoes-nav'} onClick={() => setTela(<Home/>)}>Home</button>
          <button className={'botoes-nav'} onClick={() => setTela(<Produtos/>)}>Produtos</button>
          <button className={'botoes-nav'} onClick={() => setTela(<Contato/>)}>Contatos</button>
        </nav>
      </header>
      <main className="cont-main">
        {tela} 
      </main>
    </div>
  )
}

export default App