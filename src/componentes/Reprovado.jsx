import { useState } from "react";

export default function Reprovado() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  function calcular() {
    const media = (Number(a) + Number(b)) / 2;

    if (media >= 7) return "Aprovado";
    if (media >= 4) return "Recuperacao";
    return "Reprovado";
  }

  return (
    <div>
      <h1>Aprovado ou Reprovado</h1>

      <input
        type="number"
        placeholder="Nota A"
        value={a}
        onChange={(e) => setA(e.target.value)}
      />
        <br/>
      <input
        type="number"
        placeholder="Nota B"
        value={b}
        onChange={(e) => setB(e.target.value)}
      />

      <h2>Resultado: {calcular()}</h2>
    </div>
  );
}
