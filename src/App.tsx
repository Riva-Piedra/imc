import React, { Fragment } from 'react';
import Calc from "./components/Calc";
import "./App.css"

function App() {
  return (
    <Fragment>
      <header>
        <h1 className="top">Calculadora de IMC</h1>
      </header>
      <Calc />
    </Fragment>
  );
}

export default App;
