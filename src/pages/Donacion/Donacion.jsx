import React from 'react';
import "./donacion.css";
import NavbarDonador from '../../components/NavbarDonador/NavbarDonador';

export default function Donacion() {
  return (
    <>
      <NavbarDonador />
      <div className="donacion">
        <header className="donacion-header">
          <h1>Ayúdanos a Hacer la Diferencia</h1>
          <p>Con tu apoyo, podemos cambiar vidas.</p>
        </header>

        <section className="donation-info">
          <img src="https://images.pexels.com/photos/1695906/pexels-photo-1695906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Imagen relacionada a la donación" />
          <div className="text-content">
            <h2>Nuestra Causa</h2>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.""Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
          </div>
        </section>

        <section className="achievements">
          <h2>Nuestros objetivos</h2>
          <ul>
            <li><strong>1000</strong> niños han recibido educación básica.</li>
            <li><strong>500</strong> familias tienen acceso a agua potable.</li>
            <li><strong>300</strong> mujeres han sido capacitadas en habilidades laborales.</li>
          </ul>
        </section>

        <section className="video-section">
          <h2>Conoce Más</h2>
          <video controls>
            <source src="/ruta/a/tu/video.mp4" type="video/mp4" />
          </video>
        </section>

        <footer className="donacion-footer">
          <p>Gracias por tu apoyo. Juntos podemos hacer la diferencia.</p>
          <button>Donar Ahora</button>
        </footer>
      </div>

    </>
  );
}
