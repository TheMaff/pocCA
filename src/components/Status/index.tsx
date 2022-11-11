import React from 'react'
import { Container } from './styles'

const Status = () => {
    return (
        <>
        <Container>
            <h3>Estados</h3>
            <div>
                <ul>
                    <li><span className="square"></span>  COVID19 Detectado</li>
                    <li><span className="square"></span> COVID19 No Detectado</li>
                    <li><span className="square"></span> No COVID19 Alta Med</li>
                    <li><span className="square"></span> COVID19 Alta Med</li>
                </ul>
                <ul>
                    <li><span className="square"></span> Cohorte COVID</li>
                    <li><span className="square"></span> Sospecha COVID19</li>
                    <li><span className="square"></span> Alta Med</li>
                    <li><span className="square"></span> Alta Administrativa</li>
                </ul>
                <ul>
                    <li><span className="square"></span> Quirúrgico</li>
                    <li><span className="square"></span> UGCC</li>
                    <li><span className="square"></span> Aseo Terminal</li>
                    <li><span className="square"></span> Normal</li>
                </ul>
                <ul>
                    <li><span className="square"></span> En preparación reservada</li>
                    <li><span className="square"></span> Bloqueada reservada</li>
                    <li><span className="square"></span> Ocupada reservada</li>
                    <li><span className="square"></span> Bloqueada</li>
                </ul>
                <ul>
                    <li><span className="square"></span> En preparación</li>
                    <li><span className="square"></span> Libre asignada</li>
                    <li><span className="square"></span> Libre reservado</li>
                    <li><span className="square"></span> Libre</li>
                </ul>
                <ul>
                    <li><span className="square"></span> Traslado</li>
                </ul>
            </div>

        </Container>
        </>
    )
}

export default Status