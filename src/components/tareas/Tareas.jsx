// core - react
import React, { useState } from "react";
import AgregarTareaFragment from "./fragments/AgregarTareaFragment";
import MostrarTareasFragment from "./fragments/MostrarTareasFragment";

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
                // Nuevo cálculo debido a posibilidad de repetir ID
                id : tareas.length != 0 ? ((Math.max(...tareas.map(tarea => tarea.id))) + 1) : 1,
                nombre : nombreTarea
            }
            // Agregación del objeto creado a la lista tareas uniendolo junto al resto de los elementos
            setTareas([...tareas, tareaNueva])
            // Reseteo del campo nombre tarea
            setNombreTarea("")
        }
    }

    const handleBotonEliminarTarea = (evento, id) => {
        setTareas(tareas.filter(elemento => elemento.id != id))
    }

    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <h1>Tareas</h1>
                </div>
                <AgregarTareaFragment 
                    nombreTarea={nombreTarea}
                    handleModificarTarea={handleModificarTarea}
                    handleBotonAgregarTarea={handleBotonAgregarTarea}
                />
                
                <div className="col-12 mt-4">
                    <h2>Lista de tareas</h2>
                </div>

                <MostrarTareasFragment
                    tareas={tareas}
                    handleBotonEliminarTarea={handleBotonEliminarTarea}
                />

            </div>
            
        </div>
    )
}

export default Tareas