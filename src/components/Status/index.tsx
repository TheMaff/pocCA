import React from 'react'
import { Container } from './styles'

const Status = () => {
    return (
        <>
        <Container>
            <div>
                <ul>
                    <li><span className="COVID19Detectado"></span> COVID19 Detectado</li>
                    <li><span className="COVID19NoDetectado"></span> COVID19 No Detectado</li>
                    <li><span className="noCOVID19AltaMed"></span> No COVID19 Alta Med</li>
                    <li><span className="COVID19AltaMed"></span> COVID19 Alta Med</li>
                </ul>
                <ul>
                    <li><span className="cohorteCOVID"></span> Cohorte COVID</li>
                    <li><span className="sospechaCOVID19"></span> Sospecha COVID19</li>
                    <li><span className="altaMed"></span> Alta Med</li>
                    <li><span className="altaAdministrativa"></span> Alta Administrativa</li>
                </ul>
                <ul>
                    <li><span className="quirurgico"></span> Quirúrgico</li>
                    <li><span className="ugcc"></span> UGCC</li>
                    <li><span className="aseoTerminal"></span> Aseo Terminal</li>
                    <li><span className="normal"></span> Normal</li>
                </ul>
                <ul>
                    <li><span className="enPreparacionReservada"></span> En preparación reservada</li>
                    <li><span className="bloqueadaReservada"></span> Bloqueada reservada</li>
                    <li><span className="ocupadaReservada"></span> Ocupada reservada</li>
                    <li><span className="bloqueada"></span> Bloqueada</li>
                </ul>
                <ul>
                    <li><span className="enPreparacion"></span> En preparación</li>
                    <li><span className="libre"></span> Libre asignada</li>
                    <li><span className="libreAsignada "></span> Libre reservado</li>
                    <li><span className="libreReservada"></span> Libre</li>
                </ul>
                <ul>
                    <li><span className="traslado"></span> Traslado</li>
                </ul>
            </div>

        </Container>
        </>
    )
}

export default Status