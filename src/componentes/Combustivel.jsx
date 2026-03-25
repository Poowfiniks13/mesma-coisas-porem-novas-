import { useState } from "react";

export default function Combustivel() {
  const [codigo, setCodigo] = useState("");
  const [alcool, setAlcool] = useState(0);
  const [gasolina, setGasolina] = useState(0);
  const [diesel, setDiesel] = useState(0);
  const [finalizado, setFinalizado] = useState(false);

  function adicionar() {
    const num = Number(codigo);

    if (num === 4) {
      setFinalizado(true);
      return;
    }

    if (num === 1) setAlcool(alcool + 1);
    else if (num === 2) setGasolina(gasolina + 1);
    else if (num === 3) setDiesel(diesel + 1);

    setCodigo("");
  }

  return (
    <div>
      <h1>Tipo de Combustível</h1>

      {!finalizado && (
        <>
          <input
            type="number"
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
            placeholder="Digite o código"
          />

          <button onClick={adicionar}>Enviar</button>
        </>
      )}

      {finalizado && (
        <div>
          <h2>MUITO OBRIGADO</h2>
          <p>Álcool: {alcool}</p>
          <p>Gasolina: {gasolina}</p>
          <p>Diesel: {diesel}</p>
        </div>
      )}
    </div>
  );
}