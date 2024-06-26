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
    <div>
      <h1>Compteur: {count}</h1>
      <button onClick={incrementCount}>Incrémenter</button>
      <button onClick={decrementCount}>Décrémenter</button>
      <button onClick={resetCount}>Remettre à zéro</button>
    </div>
  );
};

export default Counter;