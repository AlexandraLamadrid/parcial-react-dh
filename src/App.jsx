import React, { useState } from 'react';
import Card from './Card';

const App = () => {
  const [color, setColor] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Resetear el error
    setError('');

    // Validaciones
    if (color.length < 3 || color.trim().length === 0) {
      setError('Por favor chequea que la información sea correcta');
      return;
    }

    if (description.length < 6) {
      setError('Por favor chequea que la información sea correcta');
      return;
    }

    // Si pasa las validaciones, marcar como enviado
    setSubmitted(true);
  };

  return (
    <div className="app-container">
      <h1>Favorite Color Form</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Favorite Color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="input"
        />
        <input
          type="text"
          placeholder="Why do you like it?"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="input"
        />
        <button type="submit" className="submit-button">Submit</button>
      </form>
      
      {error && <p className="error-message">{error}</p>}
      
      {submitted && !error && (
        <Card color={color} description={description} />
      )}
    </div>
  );
};

export default App;
