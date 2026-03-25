import { useState } from "react";

export default function Cinema() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [resultado, setResultado] = useState(null);

  function calcular() {
    const antigo = Number(a);
    const novo = Number(b);

    const aumento = ((novo - antigo) / antigo) * 100;

    setResultado(aumento.toFixed(2));
  }

  return (
    <div>
      <h1>Aumento do Cinema</h1>

      <input
        type="number"
        placeholder="Preço antigo"
        value={a}
        onChange={(e) => setA(e.target.value)}
      />

      <input
        type="number"
        placeholder="Preço novo"
        value={b}
        onChange={(e) => setB(e.target.value)}
      />

      <button onClick={calcular}>Calcular</button>

      {resultado !== null && (
        <h2>{resultado}%</h2>
      )}
    </div>
  );
}