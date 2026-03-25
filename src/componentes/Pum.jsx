import { useState } from "react";

export default function Pum() {
  const [n, setN] = useState(1);

  function gerar() {
    let resultado = [];
    let numero = 1;

    for (let i = 0; i < n; i++) {
      resultado.push(
        `${numero} ${numero + 1} ${numero + 2} PUM`
      );
      numero += 4;
    }

    return resultado;
  }

  return (
    <div>
      <h1>PUM</h1>

      <input
        type="number"
        value={n}
        onChange={(e) => setN(Number(e.target.value))}
      />

      <div>
        {gerar().map((linha, index) => (
          <p key={index}>{linha}</p>
        ))}
      </div>
    </div>
  );
}