import { Col, Container, Row } from "react-bootstrap";
import colegioImg from '../assets/img/4.jpg';
import { ArrowDownCircle } from "react-bootstrap-icons";
import { useEffect, useState } from "react";
export const Footer = () =>{
    return(
        <section className="footer" id="footer">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                     <span className="tagline">Nuestro Colegio</span>
                     <h1>{'Colegio'}</h1>
                     <p>Nuestra calidad educativa la logramos no solo a través de nuestros planes y programas, maestros y espacios sino a través de nuestra formación integral que contempla distintas áreas de la persona, en el día a día buscamos que los estudiantes desarrollen su máximo potencial en un ambiente sano y enriquecedor.
                        Hemos estado convencidos desde hace 115 años que una educación de calidad no debe de ser un privilegio exclusivo y estamos comprometidos con ofrecer esta solución en nuestra ciudad.</p> 
                    <a href="https://www.facebook.com/ColegioSanFranciscoPaginaOficial/" class=" btn btn-secondary">Facebook</a>                     
                    </Col>  
                    <Col xs={12} md={6} xl={5}>
                      <img src={colegioImg} alt="header"/>   
                    </Col>                  
                </Row>
            </Container>
        </section>
    )
}