import { useState } from "react";

export default function GrandeAvisador() {
  const [mostrarMensagem, setMostrarMensagem] = useState(false);

  return (
    <div>
      <button onClick={() => setMostrarMensagem(true)}>
        Mostrar Aviso
      </button>

      {mostrarMensagem && (
        <p>
          Celulares e jogos são proibidos no laboratório. Cada vez que alguém fizer isso a equipe perde um ponto na sprint corrente da SA.
        </p>
      )}
    </div>
  );
}

;
