import React from "react";
import '../assets/css/header.css'

const Header = () =>(
    <header className="d-flex flex-column justify-content-center aligh-items-center" id="cabeceraFondo">
        <h3 className="text-light text-center">EL LUGAR PERFECTO PARA DESCANZAR ES CON NOSOTROS</h3>
        <p className="text-light text-center">
            RESERVE SU CABAÑA
        </p>
        <div className="container">
            <hr className="custom-hr"/>
        </div>
    </header>
);

export default Header;