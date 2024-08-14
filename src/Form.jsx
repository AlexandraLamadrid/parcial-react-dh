import React, { useState } from 'react';
import './styles.css';

function Form() {
  const [formData, setFormData] = useState({ input1: '', input2: '' });
  const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.input1.length < 3 || formData.input2.length < 6 || formData.input1.trim() !== formData.input1) {
      setError(true);
      setSubmitted(false);
    } else {
      setError(false);
      setSubmitted(true);
    }
  };

  return (
    <div className="container">
      <h2>Elige un color</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="input1"
          value={formData.input1}
          onChange={(e) => setFormData({ ...formData, input1: e.target.value })}
          placeholder="Ingresa tu nombre"
        />
        <input
          type="text"
          name="input2"
          value={formData.input2}
          onChange={(e) => setFormData({ ...formData, input2: e.target.value })}
          placeholder="Ingresa tu color favorito (formato HEX)"
        />
        <button type="submit">ENVIAR</button>
      </form>
      {error && <p className="error">Por favor chequea que la información sea correcta.</p>}
      {submitted && (
        <div className="card">
          <p>Hola {formData.input1}!</p>
          <p>Sabemos que tu color favorito es:</p>
          <div className="color-box" style={{ backgroundColor: formData.input2 }}>
            {formData.input2}
          </div>
        </div>
      )}
    </div>
  );
}

export default Form;
