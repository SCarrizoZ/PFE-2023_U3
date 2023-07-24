import React, { useState } from "react";

const MostrarTareasFragment = ({tareas, handleBotonEliminarTarea}) => {
    return (
        <>
            <div className="col-12">
                <ul className="list-group">
                    {
                        tareas.map(tarea => <li className="list-group-item" key={tarea.id}>
                            {tarea.nombre}
                            <button type="button" className="btn btn-outline-danger btn-sm ms-2" onClick={e => handleBotonEliminarTarea(e, tarea.id)}>Eliminar</button>
                        </li>)
                    }
                </ul>
            </div>
        </>
    )
}

export default MostrarTareasFragment