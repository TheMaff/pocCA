import styled from 'styled-components'
export const Container = styled.div`
  justify-content: space-around;
  flex-direction: column;
  display: flex;
  background: #1e1e1e;
`
export const Level = styled.div`
  height: 100%;
  border-top: 1px solid #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 0px;

  :first-child {
    border-top: none;
  }
`
export const Section = styled.div`
  display: grid;
  grid-template-columns: repeat(38, 1fr);
  margin: 2px 0px;
  :first-child {
    margin-bottom: 15px;
  }
  li {
    align-items: center;
    display: flex;
    font-size: 11px;
    list-style: none;
    width: 20px;
    height: 20px;
    color: white;
    border-radius: 49%;
  }
  .ocupada {
    background-color: #5c6067;
  }
  .bloqueada {
    background-color: #fff;
  }
  .libre {
    background-color: blue;
  }
  .libreReservada {
    background-color: #1f77b4;
  }
  .enPreparacion {
    background-color: green;
  }
`
