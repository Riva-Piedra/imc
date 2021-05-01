import React from 'react';

const Imc = (props: { IMC: number; } ) => {
    let total: number= parseFloat(props.IMC.toFixed(2)) 
    let className: string= "imc"
    let msj: string = ""

    if(total < 18.5) {
        className += " danger";
        msj = "Usted tiene un peso inferior al que debería"
    } else if (total >= 18.5 && total <= 24.9){
        className += " ok";
        msj = "Usted está dentro del rango de peso ideal"
    } else if(total >= 25 && total <= 29.9) {
        className += " caution";
        msj = "Su peso está por encima de lo normal, pero no es obesidad"
    } else if (total >= 30){
        className += " danger";
        msj = "Usted tiene obesidad"
    } 
    
    return(
        <div className={className}>
            <span id="count"> Su IMC: {total}</span>
            <p>{msj}</p>
        </div>
    )
}

export default Imc