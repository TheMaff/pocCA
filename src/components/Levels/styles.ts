import styled from 'styled-components'
export const Container = styled.div`
  justify-content: space-around;
  flex-direction: column;
  display: flex;
  background: #1e1e1e;
  border-radius: 12px;
`
export const Building = styled.div`
  border:solid 2px #ff0000;
  padding: .5rem;
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
    left:0;
    top:50%;
    :first-child{
      display:block;
    }
    h3 {
      display:none;
      color:white;
      font-size: 11px;
      font-weight: 100;
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
  margin: 5px 0px;
  min-height:36px;
  :first-child {
    margin-bottom: 15px;
  }
  div.tooltip-container {
    align-items: center;
    font-size: 10px;
    list-style: none;
    width: 26px;
    height: 26px;
    color: white;
    margin: 2px;
    padding: 1rem;
    justify-content: center;
    align-content: center;
    align-items: center;
    cursor: pointer;
    position: absolute;
    left:50%;
    transform:translate(-50%,0);
    display: inline-flex;
    background-repeat: no-repeat;
    background-size: cover;
    border:solid 2px;

    &.ejex {
      &_-1{margin-left:-2.3%}
      &_-2{margin-left:-4.6%}
      &_-3{margin-left:-6.9%}
      &_-4{margin-left:-9.2%}
      &_-5{margin-left:-11.5%}
      &_-6{margin-left:-13.8%}
      &_-7{margin-left:-16.1%}
      &_-8{margin-left:-18.4%}
      &_-9{margin-left:-20.7%}
      &_-10{margin-left:-23%}
      &_-11{margin-left:-25.3%}
      &_-12{margin-left:-27.6%}
      &_-13{margin-left:-29.9%}
      &_-14{margin-left:-32.2%}
      &_-15{margin-left:-34.5%}
      &_-16{margin-left:-36.8%}
      &_-17{margin-left:-39.1%}
      &_-18{margin-left:-41.4%}
      &_-19{margin-left:-43.7%}
      &_-20{margin-left:-46%}
      &_-21{margin-left:-48.3%}

      &_0{margin-left:0}
      
      &_1{margin-left:2.3%}
      &_2{margin-left:4.6%}
      &_3{margin-left:6.9%}
      &_4{margin-left:9.2%}
      &_5{margin-left:11.5%}
      &_6{margin-left:13.8%}
      &_7{margin-left:16.1%}
      &_8{margin-left:18.4%}
      &_9{margin-left:20.7%}
      &_10{margin-left:23%}
      &_11{margin-left:25.3%}
      &_12{margin-left:27.6%}
      &_13{margin-left:29.9%}
      &_14{margin-left:32.2%}
      &_15{margin-left:34.5%}
      &_16{margin-left:36.8%}
      &_17{margin-left:39.1%}
      &_18{margin-left:41.4%}
      &_19{margin-left:43.7%}
      &_20{margin-left:46%}
      &_21{margin-left:48.3%}
    }
    

    &.patient{
      &_COVID19Detectado {
        background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEw5Ljg4ODU0IDYuMTExNDZIMTZMMTEuMDU1NyA5Ljg4ODU0TDEyLjk0NDMgMTZMOCAxMi4yMjI5TDMuMDU1NzMgMTZMNC45NDQyNyA5Ljg4ODU0TDAgNi4xMTE0Nkg2LjExMTQ2TDggMFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=')
      }
    
      &_COVID19NoDetectado {
        background-image: url('data:image/svg+xml;base64,XXX')
        background-color: ;
        border-color: ;
      }
      &_noCOVID19AltaMed {
        border-radius:100%
      }
      &_COVID19AltaMed {
        background-color: ;
        border-color: ;
      }
      &_cohorteCOVID {
        background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEw5Ljg4ODU0IDYuMTExNDZIMTZMMTEuMDU1NyA5Ljg4ODU0TDEyLjk0NDMgMTZMOCAxMi4yMjI5TDMuMDU1NzMgMTZMNC45NDQyNyA5Ljg4ODU0TDAgNi4xMTE0Nkg2LjExMTQ2TDggMFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=')
        border-color: ;
      }
      &_sospechaCOVID19 {
        background-color: ;
        border-color: ;
      }

      &_altaMed {
        border-radius:100%
      }
      &_altaAdministrativa {
        background-color: ;
        border-color: ;
      }
      &_quirurgico {
        background-color: transparent !important;
        border:solid 2px;
      }
      &_ugcc {
        background-color: ;
        border-color: ;
      }
      &_aseoTerminal {
        background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNSAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGxpbmUgeDE9IjcuMzg0NjQiIHkxPSI0LjcwNzM4ZS0wOCIgeDI9IjcuMzg0NjQiIHkyPSIxNiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxsaW5lIHkxPSI4IiB4Mj0iMTUiIHkyPSI4IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz4KPC9zdmc+Cg==')
      }
      
      &_normal {
        background-color: ;
        border-color: ;
      }
    }

    &.room{
      &_COVID19Detectado {
        background-color: #5C6067;
        border-color: #5C6067;
      }
      &_COVID19NoDetectado {
        background-color: #5C6067;
        border-color: #5C6067;
      }
      &_noCOVID19AltaMed {
        background-color: #5C6067;
        border-color: #5C6067;
      }
      &_COVID19AltaMed {
        background-color: #5C6067;
        border-color: #5C6067;
      }
      &_cohorteCOVID {
        background-color: #5C6067;
        border-color: #5C6067;
      }
      &_sospechaCOVID19 {
        background-color: #5C6067;
        border-color: #5C6067;
      }
      &_sospechaCOVID19AltaMed{
        background-color: white;
        border-color: white;
        color: black !important;
      }
      
      &_ocupada,
      &_ocupadaReservada {
        background-color: #5C6067;
        border-color: #5C6067;
      }
      
      &_bloqueada {
        border-color: #fff;
        background-color: #fff;
        color: black !important;
      }
      &_bloqueadaReservada {
        background-color: #EDC948;
        border-color: #EDC948;
      }

      &_enPreparacion {
        background-color: #019292;
        border-color: #019292;
      }
      &_enPreparaci??nReservada {
        background-color: #E39803;
        border-color: #E39803;
      }

      &_libre {
        background-color: #1F77B4;
        border-color: #1F77B4;
      }
      &_libreAsignada {
        background-color: #B9DDF1;
        border-color: #B9DDF1;
      }
      &_libreReservada {
        background-color: #1F77B4;
        border-color: #1F77B4;
      }
      
      &_traslado {
        background-color: ;
        border-color: ;
      }
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
