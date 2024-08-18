import React, { useState } from 'react';
import "./navbarONG.css";
import { useNavigate } from "react-router-dom";

export default function NavbarONG() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  function handleSubmit(event) {
    event.preventDefault();
    // Aquí puedes manejar el envío del formulario
    closeModal();
  }

  return (
    <div>
      <nav className="navbar">
        <a className="navbar-brand" href="#">
          <img src="/assets/LogoOphitek2.png" onClick={goHome} alt="Logo" width="160" height="80" />
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
                Imagen de cover:
                <input type="file" accept="image/*" />
              </label>
              <label>
                Título:
                <input type="text" required />
              </label>
              <label>
                Descripción:
                <textarea required />
              </label>
              <label>
                Imagen ilustrativa:
                <input type="file" accept="image/*" />
              </label>
              <label>
                Objetivo 1:
                <input type="text" required />
              </label>
              <label>
                Objetivo 2:
                <input type="text" required />
              </label>
              <label>
                Objetivo 3:
                <input type="text" required />
              </label>
              <label>
                Video:
                <input type="file" accept="video/*" />
              </label>
              <button type="submit">Enviar</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
