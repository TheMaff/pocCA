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

  return (
    <Container>
      <Level>
        {data.map((value: any, index: any) => (
          <Level key={index}>
            {value.map((section: any, index: any) => (
              <Section key={index}>
                {section.map((room: any, index: any) => (
                  <li
                    key={index}
                    className={`${
                      room['estado_camas_live.estadocama'] === 'Ocupada'
                        ? 'ocupada'
                        : room['estado_camas_live.estadocama'] ===
                          'Libre reservada'
                        ? 'libreReservada'
                        : room['estado_camas_live.estadocama'] === 'Libre'
                        ? 'libre'
                        : room['estado_camas_live.estadocama'] ===
                          'En Preparacion'
                        ? 'enPreparacion'
                        : 'bloqueada'
                    }`}
                  >
                    000
                  </li>
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
