import React, {useState} from "react"

const useSelect = (label: any, opciones: any) => {

  const [state, setState] = useState('')
  
  const Select = () => (

    <>
      <div className="formContainerControl">
        <label>{label}</label>
        <select
          value={state}
          onChange={e => setState(e.target.value)}
        >
          <option value="">Seleccione</option>
          {
            opciones.map( (opcion: {nombre:any, id:any }) =>(
              <option
                key={opcion.id}
                value={opcion.id}
                >{opcion.nombre}</option>
            ))
          }
        </select>
      </div>
    </>
  )

  return [state, Select]
}

export default useSelect