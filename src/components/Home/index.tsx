import React from 'react'
import Status from '../Status'
import { Container } from './styles'

const DashboardHome = () => {
  const isMobile = window.innerWidth < 768
  const width = isMobile ? window.innerWidth - 35 : window.innerWidth - 294
  const height = 510

  setTimeout(async () => {
    const url = `https://clinicaalemana.cloud.looker.com/embed/looks/2?show_title=false&permissions=["access_data","see_user_dashboards","see_looks"]e`
    const respuesta = await fetch(url)
    console.log(respuesta)
    const dash = document.getElementById('dashboard-layout-wrapper')
    console.log(dash)
  }, 5000)

  return (
    <>
      
      <Container>
        <Status />
        <div className='entry'>
          <iframe
              id="table-looker"
              src={`https://clinicaalemana.cloud.looker.com/embed/looks/2?show_title=false&permissions=["access_data","see_user_dashboards","see_looks"]`}
              width="100%"
              height="400px"
              frameBorder="0"
            />
        </div>
      </Container>
    </>
  )
}

export default DashboardHome
