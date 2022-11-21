import React, { useEffect, useState } from 'react'
import { getCoreSDK2 } from '@looker/extension-sdk-react'
import { Looker40SDK } from '@looker/sdk'
import { dataQuery } from './EmbedQueryInterface'

const EmbedQuery = () => {
  const sdk = getCoreSDK2<Looker40SDK>()
  const [dataTest, setDataTest] = useState([] as dataQuery[])

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
            ],
            filters: { 'estado_camas_live.edificio2': 'VITACURA, EMO' },
          },
        })
      )
      const data = JSON.stringify(value)
      setDataTest(JSON.parse(data) as dataQuery[])
      /* console.log('data llegando... ' + data) */
    } catch (error) {
      console.log('Error invoking inline query', error)
    }
  }

  useEffect(() => {
    Data()
  }, [])

  return [dataTest]
}

export default EmbedQuery
