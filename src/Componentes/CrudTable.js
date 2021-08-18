import React from 'react'
import CrudTableRow from './CrudTableRow'

export default function CrudTable({data, setDataToEdit, deleteData}) {
    return (
        <div>
            <h3> Tabla de datos</h3>
            <table>
                <thead>
                    <tr>
                        <th> Nombre</th>
                        <th> Numero de telefono</th>
                        <th> Acciones </th>
                    </tr>
                </thead>
                <tbody>
                {data.length > 0 ?(
                    data.map(el =><CrudTableRow 
                        key={el.id} 
                        el={el} 
                        setDataToEdit={setDataToEdit} 
                        deleteData={deleteData}/>)
                    ): (
                        <tr>
                        <td colSpan='3'>  no hay data</td>
                        </tr> 
                )}
                </tbody>
            </table>
        </div>
    )
}
