import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from "../components/Header";

function Home() {
    const [destacados, setDestacados] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        // Simulación de obtención de datos
        setTimeout(() => {
            setDestacados([
                {
                    id: 1,
                    nombre: "Cabaña El Pinar",
                    descripcion: "La más solicitada",
                    imagen: "https://http2.mlstatic.com/D_NQ_NP_612256-MLA49953422220_052022-O.webp"
                },
                {
                    id: 2,
                    nombre: "Cabaña La Montaña",
                    descripcion: "Ideal para familias",
                    imagen: "https://http2.mlstatic.com/D_NQ_NP_666985-MLA48672872894_122021-O.webp"
                }
            ]);
            setLoading(false);
        }, 800);
    }, []);

    return (
        <main>
            <Header />
            <div className="container my-5">
                <div className="row mb-5">
                    <div className="col-md-12 text-center">
                        <h1 className="text-success">BIENVENIDOS A CABAÑAS ROKADAN</h1>
                        <p className="lead">El lugar perfecto para descansar y disfrutar de la naturaleza</p>
                    </div>
                </div>
                
                <div className="row mb-5">
                    <div className="col-md-6">
                        <h2>Sobre Nosotros</h2>
                        <p>En el corazón de la naturaleza, donde el tiempo se detiene y la tranquilidad reina, se encuentra nuestro refugio: un conjunto de cabañas diseñadas para ofrecerte una experiencia inolvidable.</p>
                        <Link to="/quienessomos" className="btn btn-outline-success">
                            Conocer más
                        </Link>
                    </div>
                    <div className="col-md-6">
                        <img 
                            src="https://via.placeholder.com/600x400?text=Cabañas+Rokadan" 
                            alt="Cabañas Rokadan" 
                            className="img-fluid rounded" 
                        />
                    </div>
                </div>
                
                <hr className="my-5" />
                
                <div className="row">
                    <div className="col-md-12 text-center mb-4">
                        <h2>Cabañas Destacadas</h2>
                    </div>
                </div>
                
                {loading ? (
                    <div className="text-center">
                        <div className="spinner-border text-success" role="status">
                            <span className="visually-hidden">Cargando...</span>
                        </div>
                    </div>
                ) : (
                    <div className="row">
                        {destacados.map(cabana => (
                            <div className="col-md-6" key={cabana.id}>
                                <div className="card mb-4">
                                    <img 
                                        src={cabana.imagen} 
                                        className="card-img-top" 
                                        alt={cabana.nombre} 
                                    />
                                    <div className="card-body text-center">
                                        <h5 className="card-title">{cabana.nombre}</h5>
                                        <p className="card-text">{cabana.descripcion}</p>
                                        <Link to={`/cabanas/${cabana.id}`} className="btn btn-success">
                                            Ver detalles
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                
                <div className="row mt-4 text-center">
                    <div className="col-md-12">
                        <Link to="/cabañas" className="btn btn-primary">
                            Ver todas las cabañas
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Home;