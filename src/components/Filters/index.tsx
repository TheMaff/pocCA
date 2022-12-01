import React, { useEffect, useState } from 'react'
import useSelect from '../../hooks/useSelect'

import { Container } from './styles'

const Filters = ({setEdificio}:any) => {
  
  //////////////////////

  const edificio2 = [
    {id:'VITACURA', nombre: 'VITACURA'},
    {id:'EMO', nombre: 'EMO'},
  ]

  const pisos = [
    {id:'1', nombre: '1° Piso'},
    {id:'2', nombre: '2° Piso'},
    {id:'3', nombre: '3° Piso'},
  ]

  const [edificio, SelectEdificio] = useSelect('Edificio', edificio2)  
  const [tipo, SelectTipo] = useSelect('TipoUnidad', pisos)
  const [piso, SelectPiso] = useSelect('Piso', pisos)
  const [unidad, SelectUnidad] = useSelect('Unidad', pisos)
  const [servicio, SelectServicio] = useSelect('Servicio', pisos)


  const handleSubmit = (e:any) => {
    e.preventDefault()
    
    if([edificio].includes('')){
      console.log('Error')
      return
    }

    setEdificio({
      edificio
    });
  }

  return (
    <>
      <Container>
        <form onSubmit={handleSubmit}>

          <div className="formContainer">
            <SelectEdificio />
            <SelectTipo />
            <SelectPiso />
            <SelectUnidad />
            <SelectServicio />
          </div>

          <div className="buttonGroup">
            <input type="submit" className="primary" value="aplicar" />
            <input type="submit" value="Eliminar" />
          </div>
        </form>
      </Container>
    </>
  )
}

export default Filters
