import React, { useState } from "react";
import "./styles.css";

export default function App(props) {
  const [estado, setEstado] = useState("ENTRADA");

  const [palpite, setPalpite] = useState(150);
  const [numPalpites, setNumPalpites] = useState(1);

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  const [resultado, setResultado] = useState("palpite");

  const iniciarJogo = () => {
    setEstado("RODANDO");
    setMin(0);
    setMax(350);
    setNumPalpites(1);
    setPalpite(150);
  };

  if (estado === "ENTRADA") {
    return <button onClick={iniciarJogo}>Iniciar o Jogo do Arrocha!</button>;
  }

  const menor = () => {
    setNumPalpites(numPalpites + 1);
    setMax(palpite);
    const proxPalpite = parseInt((palpite - min) / 2) + min;
    setPalpite(proxPalpite);
  };

  const maior = () => {
    setNumPalpites(numPalpites + 1);
    setMin(palpite);
    const proxPalpite = parseInt((max - palpite) / 2) + palpite;
    setPalpite(proxPalpite);
  };

  const acertou = () => {
    setEstado("FIM");
  };

  if (estado === "FIM") {
    return (
      <div>
        <p>
          {" "}
          Acertei o número {palpite} em {numPalpites} {resultado}!
        </p>
        <button onClick={iniciarJogo}>Iniciar novamente</button>
      </div>
    );
  }

  return (
    <div className="App">
      <p>O seu número é {palpite}?</p>
      <button onClick={menor}>é menor!</button>
      <button onClick={acertou}>acertou miserávi!</button>
      <button onClick={maior}>é maior!</button>
    </div>
  );
}
