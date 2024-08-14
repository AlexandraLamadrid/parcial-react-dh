import React from 'react';

const Card = ({ color, description }) => {
  return (
    <div className="card">
      <h2>Your Favorite Color</h2>
      <p><strong>Color:</strong> {color}</p>
      <p><strong>Description:</strong> {description}</p>
    </div>
  );
};

export default Card;
