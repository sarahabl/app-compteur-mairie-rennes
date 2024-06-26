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
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8igiNBTG7nTvx4-Kx3LYfohgy88JQSeCsZpF_Wn10HbnRSzUE87H5Mt9Z_rt0eNw5Bfo&usqp=CAU" alt="Logo Rennes" className="mb-3" />
          <h2 className="card-title">Compteur officiel</h2>
          <p>Utilisez le compteur officiel de la Mairie de Rennes qui vous permettra de compter les participants d'activités diverses (match, festival, vote, etc…).</p>
        </div>
        <div className="card-body">
          <h1 className="card-text display-4">{count}</h1>
          <div role="group">
            <button className="btn-reinitialiser" onClick={resetCount}>🔄 Remettre à 0</button>
          </div>
          <div className="btn-group" role="group">
            <button className="btn" onClick={decrementCount}>-1</button>
            <button className="btn" onClick={incrementCount}>+1</button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Counter;