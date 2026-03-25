import { useState } from "react";

export default function ConversorTemperatura() {
  const [valor, setValor] = useState("");
  const [entrada, setEntrada] = useState("C");
  const [saida, setSaida] = useState("F");

  function converterTemperatura() {
    let temp = parseFloat(valor);
    if (isNaN(temp)) return "";

    // Converter para Celsius primeiro
    let celsius;
    if (entrada === "C") celsius = temp;
    if (entrada === "F") celsius = (temp - 32) * (5 / 9);
    if (entrada === "K") celsius = temp - 273.15;

    // Converter de Celsius para saída
    if (saida === "C") return celsius.toFixed(2);
    if (saida === "F") return (celsius * 9 / 5 + 32).toFixed(2);
    if (saida === "K") return (celsius + 273.15).toFixed(2);
  }

  return (
    <div>
      <h2>Conversor de Temperatura</h2>

      <input
        type="number"
        placeholder="Digite a temperatura"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />

      <div>
        <label>De: </label>
        <select value={entrada} onChange={(e) => setEntrada(e.target.value)}>
          <option value="C">Celsius (°C)</option>
          <option value="F">Fahrenheit (°F)</option>
          <option value="K">Kelvin (K)</option>
        </select>
      </div>

      <div>
        <label>Para: </label>
        <select value={saida} onChange={(e) => setSaida(e.target.value)}>
          <option value="C">Celsius (°C)</option>
          <option value="F">Fahrenheit (°F)</option>
          <option value="K">Kelvin (K)</option>
        </select>
      </div>

      <h3>Resultado: {converterTemperatura()}</h3>
    </div>
  );
}

;