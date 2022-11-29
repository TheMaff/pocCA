import styled from 'styled-components'

export const Container = styled.div`
    padding: 1rem;
    display: block;
    background: #000;
    box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.1), 0px 0px 5px 3px rgba(0, 0, 0, 0.07);
    border-radius: 12px;
    margin: .5rem 0;

    h3 {
        font-family: 'BentonSans';
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 14px;
        margin:0;
    }

    div {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        ul {
            padding:0;
            margin: 0;
            li {
                font-family: 'BentonSans';
                font-style: normal;
                font-weight: 400;
                font-size: 10px;
                list-style: none;
                padding: 0;
                margin: .5rem 0;
                display: flex;
                align-items: center;
                color: white;
                span {
                    margin-right: .5rem;
                    width: 16px;
                    height: 16px;
                    background: #ddd;
                    display: inline-block;
                    
                    &.COVID19Detectado {
                    background-color: #5C6067;
                    border-color: #5C6067;
                    }
                    &.COVID19NoDetectado {
                    background-color: #5C6067;
                    border-color: #5C6067;
                    }
                    &.noCOVID19AltaMed {
                    background-color: #5C6067;
                    border-color: #5C6067;
                    }
                    &.COVID19AltaMed {
                    background-color: #5C6067;
                    border-color: #5C6067;
                    }
                    &.cohorteCOVID {
                    background-color: #5C6067;
                    border-color: #5C6067;
                    }
                    &.sospechaCOVID19 {
                    background-color: #5C6067;
                    border-color: #5C6067;
                    }
                    &.sospechaCOVID19AltaMed{
                    background-color: white;
                    border-color: white;
                    color: black !important;
                    }
                    
                    &.ocupada,
                    &.ocupadaReservada {
                    background-color: #5C6067;
                    border-color: #5C6067;
                    }
                    
                    &.bloqueada {
                    border-color: #fff;
                    background-color: #fff;
                    color: black !important;
                    }
                    &.bloqueadaReservada {
                    background-color: #EDC948;
                    border-color: #EDC948;
                    }
            
                    &.enPreparacion {
                    background-color: #019292;
                    border-color: #019292;
                    }
                    &.enPreparaciónReservada {
                    background-color: #E39803;
                    border-color: #E39803;
                    }
            
                    &.libre {
                    background-color: #1F77B4;
                    border-color: #1F77B4;
                    }
                    &.libreAsignada {
                    background-color: #B9DDF1;
                    border-color: #B9DDF1;
                    }
                    &.libreReservada {
                    background-color: #1F77B4;
                    border-color: #1F77B4;
                    }
                    
                    &.traslado {
                    background-color: ;
                    border-color: ;
                    }
                }
            }
        }
    }
`