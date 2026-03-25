import { useState } from "react";

export default function Bomba() {
  const [N, setN] = useState("");
  const [M, setM] = useState("");
  const [resultado, setResultado] = useState(null);

  const calcular = () => {
    const diferenca = N - M;
    setResultado(diferenca);
  };

  return (
    <div>
      <h2>Pressão do Pneu</h2>

      <div>
        <label>Pressão desejada (N): </label>
        <input
          type="number"
          min="1"
          max="40"
          value={N}
          onChange={(e) => setN(e.target.value)}
        />
      </div>

      <div>
        <label>Pressão lida pela bomba (M): </label>
        <input
          type="number"
          min="1"
          max="40"
          value={M}
          onChange={(e) => setM(e.target.value)}
        />
      </div>

      <button onClick={calcular}>Calcular</button>

      {resultado !== null && (
        <p>Diferença de pressão: {resultado}</p>
      )}
    </div>
  );
}