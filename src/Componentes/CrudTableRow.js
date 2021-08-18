import React from 'react'

function CrudTableRow({el, setDataToEdit, deleteData}) {
    let {name, numero, id} = el
    return (
        <tr>
            <td>{name}</td>
            <td>{numero}</td>
            <td> 
            <button onClick={() => setDataToEdit(el)}> Editar   </button>
            <button onClick={() => deleteData(id)}> Eliminar </button>
            </td>
        </tr>
    )
}

export default CrudTableRow
