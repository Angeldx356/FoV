import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Boton } from "./components/boton.jsx";

function App({ texto }) {
  const [estado, setEstado] = useState("Verdadero");
  return (
    <>
      <div>
        <h1>{estado}</h1>
        <button
          onClick={() => {
            if (estado == "Verdadero") {
              setEstado("Falso");
            } else if (estado == "Falso") {
              setEstado("Verdadero");
            }
          }}
        >
          Cambiar Estado
        </button>
        <Boton>
          //! Esta madre es un boton de la clase Boton
        </Boton>
      </div>
    </>
  );
}

export default App;
