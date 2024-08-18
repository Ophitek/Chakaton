import React from 'react';
import './tablaDonaciones.css';
import { useNavigate } from "react-router-dom";

export default function TablaDonaciones() {

    //Esto solo para prototipo, agregar funcionalidad 
  const donaciones = [
    { causa: 'Educación', monto: '$500' },
    { causa: 'Salud', monto: '$300' },
    { causa: 'Ambiente', monto: '$450' },
    { causa: 'Pobreza', monto: '$600' },
  ];

  const navigate = useNavigate();

  function goDonacion(){
    navigate('/donacion');
  }


  return (
    <div className="tabla-donaciones">
      <table className='table'>
        <thead>
          <tr className='tr-donaciones'>
            <th className='th-donaciones'>Causa</th>
            <th className='th-donaciones'>Monto</th>
          </tr>
        </thead>
        <tbody className='tbody-donaciones'>
          {donaciones.map((donacion, index) => (
            <tr className='tr-donaciones' key={index}>
              <td className='td-donaciones' onClick={goDonacion}>{donacion.causa}</td>
              <td className='td-donaciones'>{donacion.monto}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
