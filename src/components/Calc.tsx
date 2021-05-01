import React, { Fragment, useEffect, useState } from 'react';
import Imc from "./Imc";
import "../App.css"

const Calc = () => {

    type Value = { target: { value: any; };}

    const [H, setH] = useState(0);
    const [P, setP] = useState(0);
    const [IMC, setIMC] = useState(0)    
    
    const changeH = (e: Value) => setH(e.target.value)
    const changeP = (e: Value) => setP(e.target.value)
    const calcular = () => setIMC(P / Math.pow(H, 2))

    useEffect(() => {
        const inputP = 
        (document.getElementById("peso") as HTMLInputElement).valueAsNumber
        setP(inputP)
        const inputH = 
        (document.getElementById("altura") as HTMLInputElement).valueAsNumber
        setH(inputH)
    }, [])
    

    return(
        <Fragment>
        <Imc IMC= {IMC}/>

        <div className="calc">
            <h2>Ingrese sus Datos</h2>

            <span> Peso: {P} kg</span>

            <input onChange = {changeP}
            type="range" min="40" max="140" step="1" name="p" id="peso"/>

            <span> Altura: {H} cm</span>

            <input onChange = {changeH} 
            type="range" min="1" max="2,20" step="0.01" name="h" id="altura"/>

            <button onClick={calcular}>Calcular</button>
        </div>
        </Fragment>
    )
}


export default Calc