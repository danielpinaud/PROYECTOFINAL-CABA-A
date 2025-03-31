import React from 'react';
import ServicioCard from '../components/ServicioCard';

function Servicios() {
    const servicios = [
        {
            id: 1,
            titulo: "Desayuno Incluido",
            descripcion: "Disfruta de un desayuno completo con productos locales y caseros.",
            icono: "bi-cup-hot"
        },
        {
            id: 2,
            titulo: "WiFi Gratis",
            descripcion: "Mantente conectado con conexión WiFi de alta velocidad en todas nuestras cabañas.",
            icono: "bi-wifi"
        },
        {
            id: 3,
            titulo: "Piscina",
            descripcion: "Relájate en nuestra piscina con vistas panorámicas al bosque.",
            icono: "bi-water"
        },
        {
            id: 4,
            titulo: "Chimenea",
            descripcion: "Todas nuestras cabañas cuentan con chimenea para las noches frías.",
            icono: "bi-fire"
        },
        {
            id: 5,
            titulo: "Excursiones",
            descripcion: "Organizamos excursiones guiadas por los alrededores.",
            icono: "bi-map"
        },
        {
            id: 6,
            titulo: "Parking Gratuito",
            descripcion: "Aparcamiento privado gratuito en el alojamiento.",
            icono: "bi-p-square"
        }
    ];

    return (
        <main>
            <div className="container my-4">
                <div className="row">
                    <div className="col-md-12 text-center mb-4">
                        <h1 className="text-success">SERVICIOS</h1>
                        <p>REVISE NUESTROS SERVICIOS DISPONIBLES.</p>
                    </div>
                </div>
                <div className="row">
                    {servicios.map(servicio => (
                        <div className="col-md-4" key={servicio.id}>
                            <ServicioCard {...servicio} />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}

export default Servicios;