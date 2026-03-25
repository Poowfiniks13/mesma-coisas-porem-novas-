import { useState } from 'react';

function PapaiNoel({ N }) {
  const hos = Array(N).fill("Ho").join(" ");
  return <h1>{hos}!</h1>;
}

export default function Hohoho() {
  const [numero, setNumero] = useState(1);

  function handleChange(e) {
    let valor = Number(e.target.value);

    // Limita de 0 até 5
    if (valor > 5) valor = 5;
    if (valor < 0) valor = 0;

    setNumero(valor);
  }

  return (
    <div>
      <h2>Digite um número (0 a 5):</h2>
      
      <input
        type="number"
        value={numero}
        onChange={handleChange}
        min="0"
        max="5"
      />

      <PapaiNoel N={numero} />
    </div>
  );
}