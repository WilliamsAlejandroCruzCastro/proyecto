import { Navbar,Container,Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
import React from 'react';
import { Outlet, Link } from "react-router-dom";
export const NavBar = ( ) =>{
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink]= useState ('inicio');
  useEffect(()=>{
    const onScroll = () =>{
      if(window.scrollY > 50){ 
        setScrolled(true);
      }else{
        setScrolled(true);
      }
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll);
  },[])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

   return <div>
    <Navbar expand="xl" className={scrolled ? "scrolled":""}>
      <Container>
        <Navbar.Brand href="#">
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">            
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <Link class=" text-white m-2 fs-3 text-decoration-none  "  to="/" ><strong>Inicio</strong></Link>
            <Link class=" text-white m-2 fs-3 text-decoration-none" to="/informacion"><strong> Información</strong></Link>
            <Link class=" text-white m-2 fs-3 text-decoration-none" to="/mision"> <strong>Mision</strong></Link>
            <Link class=" text-white m-2 fs-3 text-decoration-none" to="/colegio"><strong> Colegio</strong></Link>  
            <Link class=" text-white m-2 fs-3 text-decoration-none" to="/noticias"><strong> Noticias</strong></Link>
            <Link class=" text-white m-2 fs-3 text-decoration-none" to="/admisiones"><strong> Admiciones</strong></Link> 
            <Link class=" text-white m-2 fs-3 text-decoration-none" to="/circulares"><strong> Circulares</strong></Link>
            <Link class=" text-white m-2 fs-3 text-decoration-none" to="/direccion"><strong> Direccion</strong></Link>
            <Link class=" text-white m-2 fs-3 text-decoration-none" to="/contactos"><strong> Contactos</strong></Link>   
            <Link class=" text-white m-2 fs-3 text-decoration-none" to="/creditos"><strong> Creditos</strong></Link>                     
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
       
    <Outlet/>
    <footer className="Footer">
    <p>© 2023 - Todos los derechos reservados - Williams Alejandro Cruz Castro</p>    
</footer>  
    </div>; 
       
}

      
  
