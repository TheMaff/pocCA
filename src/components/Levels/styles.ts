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
  position:relative;

  :first-child {
    border-top: none;
  }
  .level__floor {
    position: absolute;
    transform-origin: center;
    transform:rotate(-90deg) translate(50%,0);
    display:none;
    left:0;
    top:50%;
    :first-child{
      display:block;
    }
    h3 {
      display:none;
      color:white;
      font-size: 14px;
      :first-child {
        display:inline-block
      }
    }
  }
`
export const Section = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin: 2px 0px;
  :first-child {
    margin-bottom: 15px;
  }
  div.tooltip-container {
    align-items: center;
    font-size: 11px;
    list-style: none;
    width: 26px;
    height: 26px;
    color: white;
    margin: 5px;
    padding: 1rem;
    justify-content: center;
    align-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;
    display: inline-flex;
    background-repeat: no-repeat;
    background-size: cover;

    &.COVID19Detectado {
      background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEw5Ljg4ODU0IDYuMTExNDZIMTZMMTEuMDU1NyA5Ljg4ODU0TDEyLjk0NDMgMTZMOCAxMi4yMjI5TDMuMDU1NzMgMTZMNC45NDQyNyA5Ljg4ODU0TDAgNi4xMTE0Nkg2LjExMTQ2TDggMFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=')
    }
  
    &.COVID19NoDetectado {
      background-image: url('data:image/svg+xml;base64,XXX')
      background-color: ;
      border-color: ;
    }
    &.noCOVID19AltaMed {
      background-color: ;
      border-color: ;
    }
    &.COVID19AltaMed {
      background-color: ;
      border-color: ;
    }
    &.cohorteCOVID {
      background-color: ;
      border-color: ;
    }
    &.sospechaCOVID19 {
      background-color: ;
      border-color: ;
    }
    &.altaMed {
      background-color: ;
      border-color: ;
    }
    &.altaAdministrativa {
      background-color: ;
      border-color: ;
    }
    &.quirurgico {
      background-color: ;
      border-color: ;
    }
    &.ugcc {
      background-color: ;
      border-color: ;
    }
    &.aseoTerminal {
      background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNSAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGxpbmUgeDE9IjcuMzg0NjQiIHkxPSI0LjcwNzM4ZS0wOCIgeDI9IjcuMzg0NjQiIHkyPSIxNiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxsaW5lIHkxPSI4IiB4Mj0iMTUiIHkyPSI4IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz4KPC9zdmc+Cg==')
    }
    &.normal {
      background-color: ;
      border-color: ;
    }
    &.enPreparaciónReservada {
      background-color: ;
      border-color: ;
    }
    &.bloqueadaReservada {
      background-color: ;
      border-color: ;
    }
    &.ocupada {
      background-color: #5c6067;
    }
    &.ocupadaReservada {
      background-color: ;
      border-color: ;
    }
    &.bloqueada {
      border-color: #fff;
      background-color: #fff;
    }
    &.enPreparacion {
      background-color: #4DB2B2 ;
      border-color: #4DB2B2;
      border-radius: 100%;
    }
    &.libreAsignada {
      background-color: ;
      border-color: ;
    }
    &.libreReservada {
      background-color: #1F77B4;
      border-color: ;
    }
    &.libre {
      background-color: #1F77B4 ;
      border-color: #1F77B4 ;
      border-radius: 100%
    }
    &.traslado {
      background-color: ;
      border-color: ;
    }
  }

.tooltip {
  opacity: 0;
  z-index: 99;
  color: #bbb;
  width: max-content;
  display: block;
  font-size: 11px;
  padding: 5px 10px;
  border-radius: 3px;
  text-align: left;
  text-shadow: 1px 1px 2px #111;
  background: rgba(51,51,51,0.9);
  border: 1px solid rgba(34,34,34,0.9);
  box-shadow: 0 0 3px rgba(0,0,0,0.5);
  -webkit-transition: all .2s ease-in-out;
  -moz-transition: all .2s ease-in-out;
  -o-transition: all .2s ease-in-out;
  -ms-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
  -webkit-transform: scale(0);
  -moz-transform: scale(0);
  -o-transform: scale(0);
  -ms-transform: scale(0);
  transform: scale(0);
  position: absolute;
  right: 50%;
  bottom: 40px;
  ul {
    margin:0;
    padding:0;
    list-style:none;
    li {
      line-height: 1;
      margin: 5px 0;
      display:flex;
      strong {
        margin-left: 5px;
      }
    }
  }
}

.tooltip:before,.tooltip:after {
  content: '';
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid rgba(51,51,51,0.9);
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translate(-50%,0);
}

.tooltip-container:hover .tooltip,a:hover .tooltip {
  opacity: 1;
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  -o-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1) translate(50%,0);;
}
`
