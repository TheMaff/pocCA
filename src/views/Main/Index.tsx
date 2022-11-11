import React from 'react'
import styled from 'styled-components'

const Main = () => {
  const isMobile = window.innerWidth < 768
  const width = isMobile ? window.innerWidth - 35 : window.innerWidth - 294
  const height = 510

  const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;
  `;

  const Container = styled.div`
    text-align: center;
  `;

  setTimeout(async () => {
    const url = `https://clinicaalemana.cloud.looker.com/embed/looks/1?filters_bar_collapsed=false`
    const respuesta = await fetch(url)
    console.log(respuesta)
    const dash = document.getElementById('dashboard-layout-wrapper')
    console.log(dash)
  }, 5000)

  return (
    <Container>
      <Button>Normal button</Button>
      <iframe
            id="table-looker"
            src={`https://clinicaalemana.cloud.looker.com/embed/looks/2?show_title=false&permissions=["access_data","see_user_dashboards","see_looks"]`}
            width="100%"
            height="100%"
            frameBorder="0"
          />
    </Container>
   
  )
}

export default Main