import React, { useState } from 'react'

// Ingresar valor neto, calcular IVA y el valor total (valor neto + IVA)

const Ejercicio01 = () => {

    const [ valorNeto, setValorNeto ] = useState(0)
    const [ valorTotal, setValorTotal ] = useState(0)

    const handleValorNeto = (evento) => {
        setValorNeto(parseInt(evento.target.value))
    }

    const handleCalcular = (evento) => {
        let iva = valorNeto * 0.19
        setValorTotal(iva + valorNeto)
    }

    return (
        <>
            <h2>Ingrese valor neto</h2>
            <label htmlFor="neto">Valor neto</label>
            <input type="number" name="neto" id="neto" onChange={handleValorNeto} min={1}/>
            <button type="button" onClick={handleCalcular}>Calcular</button>
            <p>El valor total es: {valorTotal}</p>
        </>
    )
}

export default Ejercicio01

// Solución propia
{/* <>
<label htmlFor="valor-neto">Valor Neto</label><br />
<input onChange={handleValorNeto} id="valor-neto" name="valor-neto" type="number" min={1}/>
<p>El IVA es: {valorNeto > 180 ? valorNeto * 0.19 : 0}</p>
<p>El Total es: {(valorNeto > 180 ? valorNeto * 0.19 : 0) + valorNeto}</p>
</> */} 