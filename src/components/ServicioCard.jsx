import React from 'react';

function ServicioCard({ titulo, descripcion, icono }) {
    return (
        <div className="card text-center mb-4">
            <div className="card-body">
                <i className={`bi ${icono} fs-1 text-success mb-3`}></i>
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text">{descripcion}</p>
            </div>
        </div>
    );
}

export default ServicioCard;