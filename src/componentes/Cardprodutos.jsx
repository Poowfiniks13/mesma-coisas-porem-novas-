import React from 'react'

function Cardprodutos(prop) {
  return (
    <div className="cont-card">

      {prop.p.imagem && (
        <img src={prop.p.imagem} alt={prop.p.nome} />
      )}

      <h2>{prop.p.nome}</h2>

      {prop.p.preco && (
        <p>R$ {prop.p.preco.toFixed(2).replace('.', ',')}</p>
      )}

      {prop.p.raca && (
        <p>Raça: {prop.p.raca}</p>
      )}

      {prop.p.idade && (
        <p>Idade: {prop.p.idade} anos</p>
      )}

      {prop.p.pelagem && (
        <p>Pelagem: {prop.p.pelagem}</p>
      )}

    </div>
  )
}

export function CardCarros(prop) {
  return (
    <div className="cont-card">

      <h2>{prop.c.modelo}</h2>

      <p>Marca: {prop.c.marca}</p>

      <p>Ano: {prop.c.ano}</p>

      <p>Cor: {prop.c.cor}</p>

      <p>KM: {prop.c.quilometragem}</p>

    </div>
  )
}

export function CardCompras(prop) {
  return (
    <div className="cont-card">

      <h2>Compra #{prop.c.id}</h2>

      <p>Preço: R$ {prop.c.preco.toFixed(2)}</p>

      <p>Quantidade: {prop.c.quantidade}</p>

      <p>Total: R$ {prop.c.valorTotal.toFixed(2)}</p>

    </div>
  )
}


export function CardKpops(prop) {
  return (
    <div className="cont-card">

      <h2>{prop.c.nome}</h2>

      <p>integrantes: {prop.c.integrantes}</p>

      <p>empresa: {prop.c.empresa}</p>

      <p>AnoDebut: {prop.c.anoDebut}</p>

      <p>Fandom: {prop.c.Army}</p>
      

    </div>
  )
}
export function CardPosts(prop) {
  return (
    <div className="cont-card">

      <h1>{prop.p.emoji}</h1>

      <p>{prop.p.texto}</p>

      <p>{prop.p.hashtags}</p>

      <p>❤️ {prop.p.curtidas}</p>

    </div>
  )
}
export function CardTarefas(prop) {
  return (
    <div className="cont-card">

      <h2> {prop.t.titulo}</h2>

      <p> {prop.t.responsavel}</p>

      <p>
        {prop.t.concluido ? '✅ Concluído' : '❌ Pendente'}
      </p>

    </div>
  )
}
export function CardNotas(prop) {
  return (
    <div className="cont-card">

      <h2>📚 {prop.n.materia}</h2>

      <p>📝 Nota: {prop.n.nota}</p>

      {prop.n.desculpa && (
        <p>💀 "{prop.n.desculpa}"</p>
      )}

    </div>
  )
}
export function CardViagens(prop) {
  return (
    <div className="cont-card">

      <h2>✈️ {prop.v.destino}</h2>

      <p>📍 Origem: {prop.v.origem}</p>

      <p>🛬 Destino: {prop.v.destino}</p>

      <p>⏳ Tempo: {prop.v.tempo}</p>

      <p>🛩️ Avião: {prop.v.model}</p>

      <p>💰 R$ {prop.v.custo.toFixed(2)}</p>

    </div>
  )
}
export function CardDino(prop) {
  return (
    <div className="cont-card">

      <p> <h2>Nome</h2> 🦖 {prop.d.nome}</p>

      <p>família: {prop.d.família}</p>

      <p>peso: {prop.d.peso}</p>

      <p>altura: {prop.d.altura}</p>

      <p>comprimento: {prop.d.comprimento}</p>

      <p>períodoHistórico: {prop.d.períodoHistórico}</p>

    </div>
  )
}



export default Cardprodutos