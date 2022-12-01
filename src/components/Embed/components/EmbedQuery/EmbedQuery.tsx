import React, { useEffect, useState } from 'react'
import { getCoreSDK2 } from '@looker/extension-sdk-react'
import { Looker40SDK } from '@looker/sdk'
import { dataQuery, dataVitED } from './EmbedQueryInterface'

const EmbedQuery = () => {

  const sdk = getCoreSDK2<Looker40SDK>()
  const [dataTest, setDataTest] = useState([] as dataQuery[])
  const [dataVitED, setVitED] = useState([] as dataVitED[])


  const Data = async () => {
    try {
      const value = await sdk.ok(
        sdk.run_inline_query({
          result_format: 'json',
          body: {
            model: 'test-cas-datalake-prodrce-dev',
            view: 'estado_camas_live',
            fields: [
              'estado_camas_live.piso',
              'estado_camas_live.ejex',
              'estado_camas_live.edificio2',
              'estado_camas_live.ejey',
              'estado_camas_live.estadocama',

              'estado_camas_live.apellidomaterno',
              'estado_camas_live.apellidopaterno',
              'estado_camas_live.apellidospaciente',
              'estado_camas_live.ayuda_espiritual',
              'estado_camas_live.cant_vacunas',
              'estado_camas_live.cod_ccosto',
              'estado_camas_live.cohorte',
              'estado_camas_live.cohortepcio',
              'estado_camas_live.cohorteugcc',
              'estado_camas_live.departamento_medico_encuentros',
              'estado_camas_live.desc_comuna',
              'estado_camas_live.desc_prevision',
              'estado_camas_live.desc_prevision_gestion',
              'estado_camas_live.desccama',
              'estado_camas_live.desccama_original',
              'estado_camas_live.edad',
              'estado_camas_live.es_funcionario',
              'estado_camas_live.estadia_pabellon',
              'estado_camas_live.grupo_religioso',
              'estado_camas_live.grupo_unidad',
              'estado_camas_live.incompatibilidad_religion',
              'estado_camas_live.incompatibilidad_religion_desc',
              'estado_camas_live.ind_covid',
              'estado_camas_live.indva_descripcion',
              'estado_camas_live.medi_departamento',
              'estado_camas_live.medicotratantepaciente',
              'estado_camas_live.motivohospitalizacionpaciente',
              'estado_camas_live.naricera',
              'estado_camas_live.nombre_medico_encuentros',
              'estado_camas_live.nombrecompletopaciente',
              'estado_camas_live.nombrepaciente',
              'estado_camas_live.otra_religion',
              'estado_camas_live.ppn_paciente',
              'estado_camas_live.practica_religion',
              'estado_camas_live.religion',
              'estado_camas_live.rutpaciente',
              'estado_camas_live.secva_descripcion',
              'estado_camas_live.servicio',
              'estado_camas_live.tipo_aseo',
              'estado_camas_live.tipo_prof',
              'estado_camas_live.tipo_unidad',
              'estado_camas_live.ubicacion',
              'estado_camas_live.unidad',
              'estado_camas_live.unidad_temporal',
              'estado_camas_live.valor_resultados',
              'estado_camas_live.ventmecinv',
              'estado_camas_live.ventmecnoinv',
              'estado_camas_live.vsrnu_episodio_id',

              'estado_camas_live.fecha_actualizacion_date',
              'estado_camas_live.fecha_autorizacion_date',
              'estado_camas_live.fecha_egreso_estimada_pabellon_date',
              'estado_camas_live.fecha_solicitud_date',
              'estado_camas_live.fechaaltaadmpaciente_date',
              'estado_camas_live.fechaaltamedicapaciente_date',
              'estado_camas_live.fechaaltamedicapaciente_date',
              'estado_camas_live.fechaaltaprobablepaciente_date',
              'estado_camas_live.tiempoultimoestado2_date',
              'estado_camas_live.vsrda_fecha_ingreso_adm_date'
            ],
            filters: { 
              //'estado_camas_live.piso': '4° Piso',
              'estado_camas_live.edificio2': 'VITACURA, EMO',
            }
          },
        })
      )
      const data = JSON.stringify(value)
      setDataTest(JSON.parse(data) as dataQuery[])
      //console.log('data llegando... ' + data)
    } catch (error) {
      console.log('Error invoking inline query', error)
    }
  }

  const DataVitED = async () => {
    try {
      const value = await sdk.ok(
        sdk.run_inline_query({
          result_format: 'json',
          body: {
            model: 'test-cas-datalake-prodrce-dev',
            view: 'estado_camas_live',
            fields: [
              'estado_camas_live.piso',
              'estado_camas_live.ejex',
              'estado_camas_live.edificio2',
              'estado_camas_live.ejey',
              'estado_camas_live.estadocama',

              'estado_camas_live.apellidomaterno',
              'estado_camas_live.apellidopaterno',
              'estado_camas_live.apellidospaciente',
              'estado_camas_live.ayuda_espiritual',
              'estado_camas_live.cant_vacunas',
              'estado_camas_live.cod_ccosto',
              'estado_camas_live.cohorte',
              'estado_camas_live.cohortepcio',
              'estado_camas_live.cohorteugcc',
              'estado_camas_live.departamento_medico_encuentros',
              'estado_camas_live.desc_comuna',
              'estado_camas_live.desc_prevision',
              'estado_camas_live.desc_prevision_gestion',
              'estado_camas_live.desccama',
              'estado_camas_live.desccama_original',
              'estado_camas_live.edad',
              'estado_camas_live.es_funcionario',
              'estado_camas_live.estadia_pabellon',
              'estado_camas_live.grupo_religioso',
              'estado_camas_live.grupo_unidad',
              'estado_camas_live.incompatibilidad_religion',
              'estado_camas_live.incompatibilidad_religion_desc',
              'estado_camas_live.ind_covid',
              'estado_camas_live.indva_descripcion',
              'estado_camas_live.medi_departamento',
              'estado_camas_live.medicotratantepaciente',
              'estado_camas_live.motivohospitalizacionpaciente',
              'estado_camas_live.naricera',
              'estado_camas_live.nombre_medico_encuentros',
              'estado_camas_live.nombrecompletopaciente',
              'estado_camas_live.nombrepaciente',
              'estado_camas_live.otra_religion',
              'estado_camas_live.ppn_paciente',
              'estado_camas_live.practica_religion',
              'estado_camas_live.religion',
              'estado_camas_live.rutpaciente',
              'estado_camas_live.secva_descripcion',
              'estado_camas_live.servicio',
              'estado_camas_live.tipo_aseo',
              'estado_camas_live.tipo_prof',
              'estado_camas_live.tipo_unidad',
              'estado_camas_live.ubicacion',
              'estado_camas_live.unidad',
              'estado_camas_live.unidad_temporal',
              'estado_camas_live.valor_resultados',
              'estado_camas_live.ventmecinv',
              'estado_camas_live.ventmecnoinv',
              'estado_camas_live.vsrnu_episodio_id',

              'estado_camas_live.fecha_actualizacion_date',
              'estado_camas_live.fecha_autorizacion_date',
              'estado_camas_live.fecha_egreso_estimada_pabellon_date',
              'estado_camas_live.fecha_solicitud_date',
              'estado_camas_live.fechaaltaadmpaciente_date',
              'estado_camas_live.fechaaltamedicapaciente_date',
              'estado_camas_live.fechaaltamedicapaciente_date',
              'estado_camas_live.fechaaltaprobablepaciente_date',
              'estado_camas_live.tiempoultimoestado2_date',
              'estado_camas_live.vsrda_fecha_ingreso_adm_date'
            ],
            filters: { 
              'estado_camas_live.edificio2': 'VITACURA',
            }
          },
        })
      )
      const data = JSON.stringify(value)
      setVitED(JSON.parse(data) as dataVitED[])
      //console.log('data llegando... ' + data)
    } catch (error) {
      console.log('Error invoking inline query', error)
    }
  }

  useEffect(() => {
    Data()
    DataVitED()
  }, [])

  return [dataTest, DataVitED]
}



export default EmbedQuery
