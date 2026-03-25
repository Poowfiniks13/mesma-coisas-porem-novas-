import { useState } from "react";

export default function Lesmas() {
  const [entrada, setEntrada] = useState("");
  const [nivel, setNivel] = useState(null);

  function calcular() {
    const numeros = entrada.split(" ").map(Number);

    const maior = Math.max(...numeros);

    if (maior < 10) setNivel(1);
    else if (maior < 20) setNivel(2);
    else setNivel(3);
  }

  return (
    <div>
      <h1>Corrida de Lesmas</h1>

      <input
        type="text"
        placeholder="Digite velocidades (ex: 10 15 20)"
        value={entrada}
        onChange={(e) => setEntrada(e.target.value)}
      />

      <button onClick={calcular}>Calcular</button>

      {nivel && <h2>Nível: {nivel}</h2>}
    </div>
  );
}