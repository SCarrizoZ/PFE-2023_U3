// core - react
import React, { useState } from "react";

const listaEjemplo = [
    {
        id: 1,
        nombre : "Alimentar a los leones"
    },
    {
        id: 2,
        nombre : "Jugar con las químeras"
    },
    {
        id: 3,
        nombre : "Mimir"
    }
]

// View
const Tareas = () => {

    const [tareas, setTareas] = useState(listaEjemplo)
    const [nombreTarea, setNombreTarea] = useState('')

    const handleModificarTarea = (evento) => {
        //Lo que se escribe se ve reflejado en el evento.target.value
        setNombreTarea(evento.target.value)
    }

    const handleBotonAgregarTarea = (evento) => {
        if (nombreTarea == ""){
            alert("Debes escribir una tarea")
        } else{
            // Creación de un nuevo objeto tarea
            let tareaNueva = {
                id : tareas.length + 1,
                nombre : nombreTarea
            }
            // Agregación del objeto creado a la lista tareas uniendolo junto al resto de los elementos
            setTareas([...tareas, tareaNueva])
            // Reseteo del campo nombre tarea
            setNombreTarea("")
        }
    }

    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <h1>Tareas</h1>
                </div>
                <div className="col-12">
                    <label htmlFor="tarea">Añadir nueva tarea</label>
                    <input type="text" onChange={handleModificarTarea} className="form-control my-2" id="nombre-tarea" value={nombreTarea}/>
                    <button type="button" className="btn btn-primary" onClick={handleBotonAgregarTarea}>Añadir</button>
                </div>
                <div className="col-12 mt-4">
                    <h2>Lista de tareas</h2>
                </div>
                <div className="col-12">
                    <ul class="list-group">
                        {
                            tareas.map(tarea => <li className="list-group-item" key={tarea.id}>{tarea.nombre}</li>)
                        }
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Tareas