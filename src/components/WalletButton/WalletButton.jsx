import React, { useState } from 'react';
import { ethers } from 'ethers';

const WalletButton = () => {
    const [isConnected, setIsConnected] = useState(false);
    const [account, setAccount] = useState(null);

    const connectWallet = async () => {
        if (typeof window.ethereum !== 'undefined') {
            try {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                setAccount(accounts[0]);
                setIsConnected(true);
                console.log('Wallet conectada:', accounts[0]);
            } catch (error) {
                console.error('Error al conectar la wallet:', error);
            }
        } else {
            alert('MetaMask no está instalado. Por favor, instálalo para continuar.');
        }
    };

    return (
        <div>
            {!isConnected ? (
                <button onClick={connectWallet}>Conectar Wallet</button>
            ) : (
                <div>
                    <p>Wallet conectada</p>
                    <p>Dirección: {account}</p>
                </div>
            )}
        </div>
    );
};

export default WalletButton;
