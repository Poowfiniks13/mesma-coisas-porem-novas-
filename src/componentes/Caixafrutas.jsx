import { useState } from "react";

export default function CaixaFrutas() {
  const [maca, setMaca] = useState(0);
  const [laranja, setLaranja] = useState(0);
  const [bergamota, setBergamota] = useState(0);
  const [banana, setBanana] = useState(0);
  const [pera, setPera] = useState(0);

  const [total, setTotal] = useState(null);

  function calcular() {
    const soma =
      maca * 1.5 +
      laranja * 2.0 +
      bergamota * 1.0 +
      banana * 1.2 +
      pera * 0.5;

    setTotal(soma.toFixed(2));
  }

  return (
    <div>
      <h1>Caixa de Frutas</h1>

      <input type="number" placeholder="Maçã" onChange={(e) => setMaca(Number(e.target.value))} />
      <input type="number" placeholder="Laranja" onChange={(e) => setLaranja(Number(e.target.value))} />
      <input type="number" placeholder="Bergamota" onChange={(e) => setBergamota(Number(e.target.value))} />
      <input type="number" placeholder="Banana" onChange={(e) => setBanana(Number(e.target.value))} />
      <input type="number" placeholder="Pera" onChange={(e) => setPera(Number(e.target.value))} />

      <br /><br />

      <button onClick={calcular}>Calcular</button>

      {total && (
        <div>
          <h2>Resumo</h2>
          <p>Maçã: {maca}</p>
          <p>Laranja: {laranja}</p>
          <p>Bergamota: {bergamota}</p>
          <p>Banana: {banana}</p>
          <p>Pera: {pera}</p>

          <h3>Total: R$ {total}</h3>
        </div>
      )}
    </div>
  );
}