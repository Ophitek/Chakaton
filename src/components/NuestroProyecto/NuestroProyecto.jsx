import React from 'react';
import './el.css';


export default function NuestroProyecto () {

  return (
    <div> 
      <br></br>
      <header className="hea" id="about">
        <h1 className="title">Silice</h1>
        <p className="subtitle">Bringing Transparency to Donations with Smart Contracts</p>
      </header>
      <section  className="about-section" >
        <h2 className="section-title">About</h2>
        <p className="section-description">
          Silice is a web service dedicated to making the donation process more transparent. Our platform leverages 
          smart contracts to ensure that every donation is tracked and utilized for the greater good. Whether you're 
          a donor or an NGO, our system empowers you to manage and manipulate contracts with ease, ensuring trust 
          and transparency in every transaction.
        </p>
      </section>

      <section className="features-section">
        <h2 className="section-title">Key Features</h2>
        <ul className="features-list">
          <li>🔒 <strong>Security:</strong> Smart contracts ensure funds are used as intended.</li>
          <li>🌐 <strong>Transparency:</strong> Every transaction is recorded on the blockchain.</li>
          <li>💡 <strong>Flexibility:</strong> Customize contracts to fit the needs of your cause.</li>
          <li>📊 <strong>Analytics:</strong> Monitor and report on donation impacts with real-time data.</li>
        </ul>
      </section>

      <section className="getting-started-section">
        <h2 className="section-title">Getting Started</h2>
        <p className="section-description">
          Ready to start making a difference? Follow these simple steps to begin using Silice:
        </p>
        <ol className="steps-list">
          <li>Create an account and verify your identity.</li>
          <li>Select the cause or NGO you wish to support.</li>
          <li>Customize a smart contract or choose a predefined one.</li>
          <li>Start donating and monitor your impact through our dashboard.</li>
        </ol>
      </section>
        <br></br>
        <br></br>
    <header className='meet' id='team'>Meet Us</header>
      <section className="team-section">
        <h2 className="section-title">Our Team</h2>
        <p className="section-description">
          Meet the dedicated team behind Silice, a group of university level students 
          seeking innovation and transparency in technological and social processes.
        </p>
        <p className="section-description">A team of 4 students</p>
        <p className="section-description">Careers related to programming: AI, Data Sciences</p>
        <p className="names">
            <p>👤 Paola</p>
            <p>👤 Mariana</p>
            <p>👤 Alan</p>
            <p>👤 Cristian</p>
            <p>👤 Nancy</p>
        </p>
      </section>

    
      <footer className="footer">
        <p className="footer-text">
          © 2024 Silice. Empowering transparency in the world of donations.
        </p>
      
      </footer>
    </div>
  );
}
