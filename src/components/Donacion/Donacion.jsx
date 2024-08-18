import React from 'react';
import { useNavigate } from "react-router-dom";
import './donacion.css';

export default function Donacion() {

  const navigate = useNavigate();

  function handleDonacion(){
    navigate("/donacion")
  }

  return (
    <>
      <br />
      <div className="donacion-card" onClick={handleDonacion}>
        <img
          src="ruta-de-la-imagen.jpg"
          alt="Descripción de la imagen"
          className="donacion-card__imagen"
        />
        <div className="donacion-card__contenido">
          <h2 className="donacion-card__titulo">Título del Proyecto</h2>
          <p className="donacion-card__creador">Creado por: Nombre de la Organiazcion</p>
          <p className="donacion-card__descripcion">
            Esta es una breve descripción del proyecto que está siendo donado.
          </p>
        </div>
      </div>    
      <br />
    </>

  );
}
