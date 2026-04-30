import { useState } from 'react'
import './componentes/Cardproduto.css'
import Cardprodutos from './componentes/Cardprodutos'

function App () {
  const [produtos, setProdutos] = useState ([
    { id: 0, nome: 'kichute', preco: 333, imagem: '🏴‍☠️' },
    { id: 1, nome: 'monareta', preco: 155, imagem: '🏴‍☠️' },
    { id: 2, nome: 'tamagochi', preco: 22, imagem: '🏴‍☠️' }
  ])

  return (
    <div>
      <h1>Cards de coisas</h1>
      <div className="listacards"> 
      
      {
        produtos.map((produto) => (
          <Cardprodutos p={produto} key={produto.id}/>
        ))
        
      }
 </div>
    </div>
  )
}

export default App