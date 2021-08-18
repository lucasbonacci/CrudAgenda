import React, {useState,useEffect} from 'react'

const initialForm={
    name:'',
    id: null,
    numero:''
}


function CrudForm({createData, updateData, dataToEdit, setDataToEdit}) {
    const [form, setForm] = useState(initialForm)

    useEffect(()=>{
        if(dataToEdit){
            setForm(dataToEdit)
        } else{
            setForm(initialForm)
        }
    },[dataToEdit])

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!form.name || !form.numero){
            alert('datos incompletos')
            return
        }

        if(form.id === null){
            createData(form)
        } else{
            updateData(form)
        }

        handleReset()
    }

    const handleReset = (e) =>{
        setForm(initialForm)
        setDataToEdit(null)
    }


    return (
        <div>
            {dataToEdit === null? (<h3> Agregar</h3>) : <h3>Editar</h3>}
            <form onSubmit={handleSubmit}>
                <input type='text' name='name' placeholder='nombre' onChange={handleChange} value={form.name}/>
                <input type='text' name='numero' placeholder='telefono' onChange={handleChange} value={form.numero}/>
                <input type='submit' value='Enviar'/>
                <input type='reset' value='Limpiar' onClick={handleReset} />
            </form>
        </div>
    )
}

export default CrudForm
