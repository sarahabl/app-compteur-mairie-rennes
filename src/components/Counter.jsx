// src/Counter.jsx
import React, { useState } from 'react';

// Composant Counter pour gérer le compteur de participants
const Counter = () => {

  // Déclaration d'une nouvelle variable d'état, que nous appellons "count".
  const [count, setCount] = useState(0);

  // Fonction pour incrémenter le compteur
  const incrementCount = () => {
    setCount(count + 1);
  };

  // Fonction pour décrémenter le compteur
  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  // Fonction pour remettre le compteur à zéro
  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className="container mt-5">
      <div className="card text-center">
        <div className="card-header">
          <h2 className="card-title">Compteur de Participants</h2>
        </div>
        <div className="card-body">
          <h1 className="card-text display-4">{count}</h1>
          <div className="btn-group" role="group">
            <button className="btn btn-success" onClick={incrementCount}>Incrémenter</button>
            <button className="btn btn-warning" onClick={decrementCount}>Décrémenter</button>
            <button className="btn btn-danger" onClick={resetCount}>Remettre à zéro</button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Counter;