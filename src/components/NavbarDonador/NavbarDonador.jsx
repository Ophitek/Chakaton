import React from 'react'
import "./navbarDonador.css"
import { useState } from "react";
import {SearchBar} from "../../components/SearchBar/SearchBar"
import {SearchResultsList} from "../../components/SearchResultsList/SearchResultsList"

export default function NavbarDonador() {
  const [results, setResults] = useState([]);

  return (
      <nav className='navbar'>
      <SearchBar setResults={setResults} /> 
      <div>
        {results && results.length > 0 && <SearchResultsList results={results} />}
      </div>
      <div className='logo'>
      📋 Lista
      </div>
      <div className="perfil">
       <a>Status ☁️</a>
     </div>
      </nav>
    
  )

}
