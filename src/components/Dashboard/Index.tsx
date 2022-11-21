import React from 'react'
import styled from 'styled-components'
import EmbedQuery from '../Embed/components/EmbedQuery/EmbedQuery'
const Dashboard = () => {
  const isMobile = window.innerWidth < 768
  const width = isMobile ? window.innerWidth - 35 : window.innerWidth - 294
  const height = 510
  const [dataTest] = EmbedQuery()
  const Container = styled.div`
    text-align: center;
  `
  console.log('llegando... ' + dataTest)
  /* 
  setTimeout(async () => {
    const url = `https://clinicaalemana.cloud.looker.com/embed/looks/1?filters_bar_collapsed=false`
    const respuesta = await fetch(url)
    console.log(respuesta)
    const dash = document.getElementById('dashboard-layout-wrapper')
    console.log(dash)
  }, 5000) */

  return (
    <Container>
      <iframe
        id="table-looker"
        src={`https://clinicaalemana.cloud.looker.com/embed/looks/1?show_title=false&permissions=["access_data","see_user_dashboards","see_looks"]`}
        width="100%"
        height="100%"
        frameBorder="0"
      />
    </Container>
  )
}

export default Dashboard
