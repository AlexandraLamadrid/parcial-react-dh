import React, { useState } from "react";
import Card from "./Card";

const Form = () => {
  const [formData, setFormData] = useState({ input1: "", input2: "" });
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    if (formData.input1.length < 3 || formData.input1.startsWith(" ")) {
      setError("Por favor chequea que la información sea correcta");
      setSubmitted(false);
      return;
    }
    if (formData.input2.length < 6) {
      setError("Por favor chequea que la información sea correcta");
      setSubmitted(false);
      return;
    }

    setError("");
    setSubmitted(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Input 1:</label>
          <input
            type="text"
            name="input1"
            value={formData.input1}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Input 2:</label>
          <input
            type="text"
            name="input2"
            value={formData.input2}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {submitted && <Card data={formData} />}
    </div>
  );
};

export default Form;
