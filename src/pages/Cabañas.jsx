import React, { useState, useEffect } from 'react';
import CabanaCard from '../components/CabanaCard';

function Cabañas() {
    const [cabanas, setCabanas] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        // Simulación de obtención de datos
        setTimeout(() => {
            setCabanas([
                {
                    id: 1,
                    nombre: "Cabaña El Pinar",
                    descripcion: "Hermosa cabaña en medio del bosque con vistas panorámicas.",
                    precio: 25000,
                    capacidad: 4,
                    imagen: "https://via.placeholder.com/300x200?text=Cabaña+El+Pinar"
                },
                {
                    id: 2,
                    nombre: "Cabaña La Montaña",
                    descripcion: "Acogedora cabaña de montaña ideal para desconectar.",
                    precio: 32000,
                    capacidad: 6,
                    imagen: "https://via.placeholder.com/300x200?text=Cabaña+La+Montaña"
                },
                {
                    id: 3,
                    nombre: "Cabaña El Lago",
                    descripcion: "Moderna cabaña con acceso directo al lago.",
                    precio: 45000,
                    capacidad: 8,
                    imagen: "https://via.placeholder.com/300x200?text=Cabaña+El+Lago"
                }
            ]);
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <main>
            <div className="container my-4">
                <div className="row">
                    <div className="col-md-12 text-center mb-4">
                        <h1 className="text-success">CABAÑAS</h1>
                        <p>REVISE NUESTRAS CABAÑAS DISPONIBLES.</p>
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
                        {cabanas.map(cabana => (
                            <div className="col-md-4" key={cabana.id}>
                                <CabanaCard {...cabana} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}

export default Cabañas;