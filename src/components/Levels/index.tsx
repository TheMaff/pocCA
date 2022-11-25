import { title } from 'process'
import React, { useEffect } from 'react'
import EmbedQuery from '../Embed/components/EmbedQuery/EmbedQuery'
import { Container, Level, Section } from './styles'

const Levels = () => {
  const [dataTest] = EmbedQuery()

  const func = (array: any) => {
    const newData = array.reduce((ac: any, cv: any) => {

      // Crear sección de pisos la primera vez
      if (!ac[cv['estado_camas_live.piso']]) {
        ac[cv['estado_camas_live.piso']] = []
      }

      // Crear sección ejey la primera vez
      if (!ac[cv['estado_camas_live.piso']][cv['estado_camas_live.ejey']]) {
        ac[cv['estado_camas_live.piso']][cv['estado_camas_live.ejey']] = []
      }
      // Si ya se ha creado el piso
      if (ac[cv['estado_camas_live.piso']]) {
        
        // Si en el piso ya se creó la sección de ejey
        if (ac[cv['estado_camas_live.piso']][cv['estado_camas_live.ejey']]) {
          // Si ya existe un objeto en la sección ejex pusheo los nuevos
          if (
            ac[cv['estado_camas_live.piso']][cv['estado_camas_live.ejey']][
              cv['estado_camas_live.ejex']
            ]
          ) {
            ac[cv['estado_camas_live.piso']][cv['estado_camas_live.ejey']].push(
              cv
            )
          } else {
            // si no existe ningún objeto, se agrega el primero
            ac[cv['estado_camas_live.piso']][cv['estado_camas_live.ejey']][
              cv['estado_camas_live.ejex']
            ] = cv
          }
        }
      }

      return ac
    }, [])
    return newData
  }

  let data: any = []

  for (const pisos in func(dataTest)) {
    data.push(func(dataTest)[pisos])
  }
  console.log('Data: ')
  console.log(data)
  return (
    <Container>
      <Level>

        {data.map((value: any, index: any) => (

          <Level key={index}>

            {value.map((piso: any, index: any) => (
              <div key={index} className="level__floor">
              {
                piso.map((title: any, index: any) => (
                  <h3 key={index}>
                  {
                    title['estado_camas_live.piso']
                  }
                  </h3>
                ))
              }
              </div>
            ))}

            {value.map((section: any, index: any) => (

              <Section key={index}>

                {section.map((room: any, index: any) => (
                  
                  <div
                    key={index}
                    className={
                      `${
                        room['estado_camas_live.estadocama'] === 'Ocupada'
                        ? 'ocupada'
                        : room['estado_camas_live.estadocama'] === 'Libre reservada'
                        ? 'libreReservada'
                        : room['estado_camas_live.estadocama'] === 'Libre'
                        ? 'libre'
                        : room['estado_camas_live.estadocama'] === 'Libre asignada'
                        ? 'libreAsignada'
                        : room['estado_camas_live.estadocama'] === 'En Preparacion'
                        ? 'enPreparacion'
                        : 'bloqueada'
                      }
                      tooltip-container
                    `}
                  >
                    {room['estado_camas_live.desccama']}

                    <div className='tooltip'>
                      
                      <ul>
                        <li>Estado: <strong> {room['estado_camas_live.estadocama']}</strong></li>
                        <li>Cohorte: <strong> {room['estado_camas_live.cohorte']}</strong></li>
                        <li>Examen: </li>
                        <li></li>
                        <li>Motivo de Hospitalización: <strong> {room['estado_camas_live.motivohospitalizacionpaciente']}</strong></li>
                        <li>Nombre Paciente: <strong> {room['estado_camas_live.nombrepaciente']}</strong></li>
                        <li></li>
                        <li>Nombre Médico Tratante (por encuentros): <strong> {room['estado_camas_live.nombre_medico_encuentros']}</strong></li>
                        <li>Departamento: <strong> {room['estado_camas_live.departamento_medico_encuentros']}</strong></li>
                        <li></li>
                        <li>Traslado: </li>
                        <li>Cama: <strong> {room['estado_camas_live.desccama']}</strong></li>
                        <li></li>
                        <li>Edificio: <strong> {room['estado_camas_live.edificio2']}</strong></li>
                        <li>Pisos: <strong> {room['estado_camas_live.piso']}</strong></li>
                        <li></li>
                        <li>Fecha Ingreso: <strong> {room['estado_camas_live.vsrda_fecha_ingreso_adm']}</strong></li>
                        <li>Fecha Probable Egreso: <strong> {room['estado_camas_live.fecha_egreso_estimada_pabellon']}</strong></li>
                        <li></li>
                        <li>Ultimo Estado: <strong> {room['estado_camas_live.last_fecha_encuentro']}</strong></li>
                      </ul>
                      
                    </div>
                  </div>

                ))}
              </Section>
            ))}
          </Level>
        ))}
      </Level>
    </Container>
  )
}

export default Levels
