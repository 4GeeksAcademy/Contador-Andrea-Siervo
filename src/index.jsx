import React from "react";
import ReactDOM from "react-dom/client";

// Componente
function SecondsCounter({ seconds }) {
  return (
    <div style={{ fontSize: "40px" }}>
      ⏱ {seconds}
    </div>
  );
}

// Contador global
let seconds = 0;

// Render inicial
const root = ReactDOM.createRoot(document.getElementById("root"));

setInterval(() => {
  seconds++;
  root.render(<SecondsCounter seconds={seconds} />);
}, 1000);