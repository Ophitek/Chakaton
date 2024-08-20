import React, { useState } from 'react';
import axios from 'axios'; // Asegúrate de importar axios
import "./navbarONG.css";
import { useNavigate } from "react-router-dom";

export default function NavbarONG() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Estados para los valores del formulario
  const [name, setName] = useState('');
  const [contractAddress, setContractAddress] = useState('');
  const [description, setDescription] = useState('');
  const [owner, setOwner] = useState('');

  function goHome() {
    navigate("/ong");
  }

  function handleCreateDonations() {
    setIsModalOpen(true);
  }

  function goMyDonations() {
    navigate("/misdonacionesong");
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  async function handleSubmit(event) {
    // FUNCION PARA GUARDAR CONTRATOS
    try {
      const response = await axios.post(`${process.env.URL-API}/api/crearContrato`, {
        name,
        description,
      });
      console.log('Contrato guardado en la base de datos:', response.data);
    } catch (error) {
      console.error('Error al guardar el contrato:', error);
    }
    closeModal();
  }

  return (
    <div>
      <nav className="navbar">
        <a className="navbar-brand" href="#">
          <img src="/assets/ophitekLogoBW.png" onClick={goHome} alt="Logo" className='navbar-ophitek-logo'/>
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" onClick={handleCreateDonations}>Crear donaciones</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={goMyDonations}>Mis donaciones</a>
            </li>
          </ul>
        </div>
      </nav>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>X</button>
            <form onSubmit={handleSubmit}>
              <label>
                Nombre del contrato:
                <input 
                  type="text" 
                  id='Donacion' 
                  required 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                />
              </label>
              <label>
                Descripción:
                <textarea 
                  required 
                  id='Razon' 
                  value={description} 
                  onChange={(e) => setDescription(e.target.value)} 
                />
              </label>
              <button type="submit">Enviar</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
