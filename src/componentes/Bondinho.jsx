import { useState } from "react";

export default function Bondinho() {
  const [alunos, setAlunos] = useState(0);
  const [monitores, setMonitores] = useState(0);

  function verificar() {
    const total = Number(alunos) + Number(monitores);
    return total <= 50 ? "S" : "N";
  }

  return (
    <div>
      <h1>Bondinho</h1>

      <input
        type="number"
        placeholder="Alunos"
        value={alunos}
        onChange={(e) => setAlunos(e.target.value)}
      />
        <br/>
      <input
        type="number"
        placeholder="Monitores"
        value={monitores}
        onChange={(e) => setMonitores(e.target.value)}
      />

      <h2>Resultado: {verificar()}</h2>
    </div>
  );
}