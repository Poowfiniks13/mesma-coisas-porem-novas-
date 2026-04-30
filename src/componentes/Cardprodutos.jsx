import React from 'react'

function Cardprodutos(prop) {
  return (
    <div className="cont-card">
      <p className='imagem-produto'>{prop.p.imagem}</p>

      <h2>{prop.p.nome}</h2>

      <p>R$ {prop.p.preco.toFixed(2).replace('.', ',')}</p>
    </div>
  )
}

export default Cardprodutos