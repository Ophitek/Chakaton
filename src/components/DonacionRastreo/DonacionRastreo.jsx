import React from 'react';
import "./donacionRastreo.css";

export default function DonacionRastreo() {
  return (
    <>
      <br />
      <div className="info-donacion">
        <img
          src="ruta-de-la-imagen.jpg"
          alt="Descripción de la imagen"
          className="info-donacion__imagen"
        />
        <div className="info-donacion__contenido">
          <h2 className="info-donacion__nombre">Nombre de la Donación</h2>
          <p className="info-donacion__autor">Organización: Nombre de la Organización</p>
          <p className="info-donacion__fecha">Fecha: 17 de agosto de 2024</p>
          <p className="info-donacion__cantidad">Cantidad: $500.00</p>
          <p className="info-donacion__id">ID de Donación: 123456</p>
          <p className="info-donacion__proposito">Propósito: Financiación de becas</p>
        </div>
      </div>
      <br />
    </>
  );
}
