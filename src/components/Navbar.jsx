import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function Navbar() {
    const { isAuthenticated, logout } = useContext(AuthContext);
    
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand text-light" to="/">
                   CABAÑAS ROKADAN
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav w-100">
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/">
                                <button className="btn btn-outline-light">
                                    <i className="bi bi-house"></i>
                                    &nbsp;Home
                                </button>
                            </Link>
                        </li>
                        {isAuthenticated ? (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link text-light" to="/quienessomos">
                                        <button className="btn btn-outline-light">
                                            <i className="bi bi-unlock"></i>
                                            &nbsp; QUIENES SOMOS
                                        </button>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-light" to="/cabañas">
                                        <button className="btn btn-outline-light">
                                            <i className="bi bi-unlock"></i>
                                            &nbsp; CABAÑAS
                                        </button>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-light" to="/servicios">
                                        <button className="btn btn-outline-light">
                                            <i className="bi bi-unlock"></i>
                                            &nbsp; SERVICIOS
                                        </button>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <button className="btn btn-outline-danger nav-link" onClick={logout}>
                                        <i className="bi bi-box-arrow-right"></i>
                                        &nbsp;CERRAR SESIÓN
                                    </button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link text-light" to="/login">
                                        <button className="btn btn-outline-light">
                                            <i className="bi bi-key"></i>
                                            &nbsp;INICIAR SESIÓN
                                        </button>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-light" to="/register">
                                        <button className="btn btn-outline-light">
                                            <i className="bi bi-person-plus"></i>
                                            &nbsp;REGISTRARSE
                                        </button>
                                    </Link>
                                </li>
                            </>
                        )}
                        <li className="nav-item ms-auto">
                            <Link className="nav-link" to="/reservar">
                                <button className="btn btn-outline-success">
                                    <i className="bi bi-cart3"></i>
                                    &nbsp;RESERVAR
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;