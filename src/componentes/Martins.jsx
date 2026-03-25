import { useState } from 'react'

export default function Martins() {
  const [nota, setNota] = useState('')
  const [data, setData] = useState('')
  const [tipo, setTipo] = useState('oxigenio')
  const [valor, setValor] = useState('')
  const [processo, setProcesso] = useState('')
  const [registros, setRegistros] = useState([])

  function adicionar() {
    const novo = { nota, data, tipo, valor, processo }
    setRegistros([...registros, novo])

    setNota('')
    setData('')
    setTipo('oxigenio')
    setValor('')
    setProcesso('')
  }

  return (
    <div>
      <h1>Controle de Cilindros</h1>

      <input placeholder="Nota" value={nota} onChange={(e) => setNota(e.target.value)} />
      <input type="date" value={data} onChange={(e) => setData(e.target.value)} />

      <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
        <option value="oxigenio">Oxigênio</option>
        <option value="locacao">Locação</option>
      </select>

      <input placeholder="Valor" value={valor} onChange={(e) => setValor(e.target.value)} />
      <input placeholder="Processo" value={processo} onChange={(e) => setProcesso(e.target.value)} />

      <button onClick={adicionar}>Adicionar</button>

      <table border="1">
        <thead>
          <tr>
            <th>Nota</th>
            <th>Data</th>
            <th>Tipo</th>
            <th>Valor</th>
            <th>Processo</th>
          </tr>
        </thead>
        <tbody>
          {registros.map((item, index) => (
            <tr key={index}>
              <td>{item.nota}</td>
              <td>{item.data}</td>
              <td>{item.tipo}</td>
              <td>{item.valor}</td>
              <td>{item.processo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

