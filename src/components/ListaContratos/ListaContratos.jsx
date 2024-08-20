import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ListaContratos = () => {
    const [contracts, setContracts] = useState([]);

    useEffect(() => {
        const fetchContracts = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_URL_API}/api/contracts`); // Hace la solicitud a la API para obtener los contratos
                setContracts(response.data); // Guarda los contratos en el estado
            } catch (error) {
                console.error('Error al obtener la lista de contratos:', error);
            }
        };

        fetchContracts();
    }, []);

    return (
        <div>
            <h1>Organizaciones</h1>
            <ul>
                {contracts.map(contract => (
                    <li key={contract._id}>
                        <h2>{contract.name}</h2>
                        <p>Dirección del contrato: {contract.contractAddress}</p>
                        <p>Descripcion: {contract.description}</p>
                        <p>Propietario: {contract.owner}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListaContratos;
