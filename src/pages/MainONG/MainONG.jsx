import React from 'react';
import "./mainONG.css";
import NavbarONG from '../../components/NavbarONG/NavbarONG';
import TablaDonaciones from '../../components/TablaDonaciones/TablaDonaciones';

export default function MainONG() {
  return (
    <>
      <NavbarONG />
      <div className="organizacion">
        <img
          src="https://images.pexels.com/photos/756758/pexels-photo-756758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Descripción de la imagen"
          className="organizacion__imagen"
        />
        <h1 className="organizacion__nombre">Nombre de la Organización</h1>
        <p className="organizacion__descripcion">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </p>
        <TablaDonaciones />
      </div>
    </>
  );
}
