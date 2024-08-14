import PropTypes from "prop-types";

const Card = ({ data }) => {
  return (
    <div style={{ border: "1px solid black", padding: "10px", marginTop: "10px" }}>
      <h3>Datos Ingresados:</h3>
      <p>Input 1: {data.input1}</p>
      <p>Input 2: {data.input2}</p>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.shape({
    input1: PropTypes.string.isRequired,
    input2: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
