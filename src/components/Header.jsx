import React from "react";
import '../assets/css/header.css'

const Header = () =>(
    <header className="d-flex flex-column justify-content-center aligh-items-center" id="cabeceraFondo">
        <h1 className="text-light text-center">¡CABAÑAS!</h1>
        <p className="text-light text-center">
            RESERVE SU CABAÑA
        </p>
        <div className="container">
            <hr className="custom-hr"/>
        </div>
    </header>
);

export default Header;