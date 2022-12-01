import { title } from 'process'
import React, { useEffect } from 'react'
import EmbedQuery from '../Embed/components/EmbedQuery/EmbedQuery'
import { Container, Level, Section } from './styles'

const Levels = () => {

  const [dataTest] = EmbedQuery()
  
  const func1 = (array: any) => {

    const newData = array.reduce((ac: any, cv: any, i:any) => {

      // Crear sección de edificios la primera vez
      if (!ac[cv['estado_camas_live.edificio2']]) {
        ac[cv['estado_camas_live.edificio2']] = []
      }
      
      //Crear sección pisos la primera vez
      if (!ac[cv['estado_camas_live.edificio2']][cv['estado_camas_live.piso']]) {
        ac[cv['estado_camas_live.edificio2']][cv['estado_camas_live.piso']] = []
      }

      //Crear sección ejey la primera vez
      if (!ac[cv['estado_camas_live.edificio2']][cv['estado_camas_live.piso']][cv['estado_camas_live.ejey']]) {
        ac[cv['estado_camas_live.edificio2']][cv['estado_camas_live.piso']][cv['estado_camas_live.ejey']] = []
      }

      //Si ya se ha creado el edificio2
      if (ac[cv['estado_camas_live.edificio2']]) {
        
        //Si en el edificio2 ya se creó la sección de piso
        if (ac[cv['estado_camas_live.edificio2']][cv['estado_camas_live.piso']]) {

          //Si ya existe un objeto en la sección ejey pusheo los nuevos
          if (ac[cv['estado_camas_live.edificio2']][cv['estado_camas_live.piso']][cv['estado_camas_live.ejey']]) {

            //Si ya existe un objeto en la sección ejex pusheo los nuevos
            if (ac[cv['estado_camas_live.edificio2']][cv['estado_camas_live.piso']][cv['estado_camas_live.ejey']][cv['estado_camas_live.ejex']]) {

              ac[cv['estado_camas_live.edificio2']][cv['estado_camas_live.piso']][cv['estado_camas_live.ejey']].push(cv)   

            } else {
              // si no existe ningún objeto, se agrega el primero
              ac[cv['estado_camas_live.edificio2']][cv['estado_camas_live.piso']][cv['estado_camas_live.ejey']] = cv
            }
          }

        }
      }

      return ac

    }, [])

    return newData
  }

  let data: any = []
  let edData: any = []

  for (const edificio in func1(dataTest)) {
    
    data.push(func1(dataTest)[edificio])
    
    console.log('Data in for:____');
    console.log(edificio);

    for (const piso in [edificio]){

      console.log('Piso:_____');
      console.log(piso);
      
      //data.push(data[edificio][piso])
    }

  }
  
  console.log('Data:_______');
  console.log(data);

  console.log('EdData:____');
  console.log(edData);

  console.log('func1(dataTest)');
  console.log(func1(dataTest));

  return (
    <Container>
      <Level>

      {edData.map((value: any, index: any) => (

        console.log('value'),
        console.log(value),
        
        <Level key={index}>

          {value.map((section: any, index: any) => (

          <Section key={index}>

            {section.map((room: any, index: any) => (
              
              {room}

            ))}

          </Section>

          ))}

        </Level>
      
      ))}

        {/*
        {edData.map((value: any, index: any) => (

          <Level key={index}>

            {value.map((piso: any, index: any) => (
              <div key={index} className="level__floor">
              {
                piso.map((title: any, index: any) => (
                  <h3 key={index}>
                    <span>{title['estado_camas_live.edificio2']} </span>
                    <span> {title['estado_camas_live.piso']}</span>
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
                    className=
                    {`ejex_${room['estado_camas_live.ejex']} ejey_${room['estado_camas_live.ejey']} room_${
                        room['estado_camas_live.valor_resultados'] === 'DETECTADO' && room['estado_camas_live.fechaaltamedicapaciente'] !== null
                        ? 'COVID19AltaMed'

                        :room['estado_camas_live.valor_resultados'] === 'DETECTADO'
                        ? 'COVID19Detectado'
                        
                        :room['estado_camas_live.cohorte'] === 1 
                        ? 'cohorteCOVID'

                        :room['estado_camas_live.valor_resultados'] === 'No detectado' && room['estado_camas_live.fechaaltamedicapaciente_date'] !== null
                        ? 'noCOVID19AltaMed'

                        :room['estado_camas_live.valor_resultados'] === 'No detectado'
                        ? 'COVID19NoDetectado'
                        
                        :room['estado_camas_live.ind_covid'] === 1 && room['estado_camas_live.valor_resultados'] === null && room['estado_camas_live.fechaaltamedicapaciente_date'] !== null
                        ? 'sospechaCOVID19AltaMed'

                        :room['estado_camas_live.ind_covid'] === 1 && room['estado_camas_live.valor_resultados'] === null
                        ? 'sospechaCOVID19'

                        : `${
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
                        }`
                      } patient_${
                        room['estado_camas_live.cohorte'] > 0
                        ? 'ugcc'

                        : room ['estado_camas_live.valor_resultados'] === 'DETECTADO' && room['estado_camas_live.fechaaltamedicapaciente_date'] !== null
                        ? 'COVID19AltaMed'

                        :room['estado_camas_live.valor_resultados'] === 'DETECTADO'    
                        ? 'COVID19Detectado'
                        
                        :room['estado_camas_live.cohorte'] > 0 
                        ? 'cohorteCOVID'
                        
                        :room['estado_camas_live.valor_resultados'] === 'No detectado' && room['estado_camas_live.fechaaltamedicapaciente_date'] !== null
                        ? 'noCOVID19AltaMed'
                            
                        :room['estado_camas_live.vsrda_fecha_ingreso_adm_date'] === null
                        ? 'quirurgico'
                        
                        :room['estado_camas_live.valor_resultados'] === 'No detectado'
                        ? 'COVID19NoDetectado'

                        :room['estado_camas_live.ind_covid'] === 1 && room['estado_camas_live.valor_resultados'] === null && room['estado_camas_live.fechaaltamedicapaciente_date'] !== null
                        ? 'sospechaCOVID19AltaMed'
                        
                        :room['estado_camas_live.ind_covid'] === 1 && room['estado_camas_live.valor_resultados'] === null
                        ? 'sospechaCOVID19'

                        :room['estado_camas_live.indva_descripcion']?.includes('MQ')
                        ? 'traslado'
                        
                        :room['estado_camas_live.tipo_unidad']?.includes('QUI') && room['estado_camas_live.indva_descripcion'] !== null
                        ? 'trasladoPrioritario'

                        :room['estado_camas_live.indva_descripcion']?.includes('UTI') && room['estado_camas_live.tipo_unidad']?.includes('UCI')
                        ? 'traslado'
                        
                        :room['estado_camas_live.indva_descripcion']?.includes('UCI') && room['estado_camas_live.tipo_unidad']?.includes('UTI')
                        ? 'trasladoPrioritario'
                        
                        :room['estado_camas_live.tipo_aseo'] === 'Terminal'
                        ? 'aseoTerminal'
                        
                        :room['estado_camas_live.fechaaltampaciente_date'] === null
                        ? 'altaAdministrativa'
                        
                        :room['estado_camas_live.fechaaltamedicapaciente_date'] === null
                        ? 'altaMedica'
                        
                        : 'normal'
                      } tooltip-container`}>

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
                        <li>Fecha Ingreso: <strong> {room['estado_camas_live.vsrda_fecha_ingreso_adm_date']}</strong></li>
                        <li>Fecha Probable Egreso: <strong> {room['estado_camas_live.fecha_egreso_estimada_pabellon_date']}</strong></li>
                        <li></li>
                        <li>Ultimo Estado: <strong> {room['estado_camas_live.last_fecha_encuentro_date']}</strong></li>
                      </ul>
                      
                    </div>
                  </div>

                ))}
              </Section>
            ))}
          </Level>
        ))}
                    
        */}

      </Level>
    </Container>
  )
}

export default Levels
