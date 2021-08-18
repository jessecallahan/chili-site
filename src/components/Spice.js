import React from 'react';
import PropTypes from 'prop-types';

function Spice(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.spiceSelected(props.id)}>
        <h2>{props.name}</h2>
        <p><em>{props.description}</em></p>
        <p>Heat Level: {props.heatLevel}</p>
        <p>Origin Planet: {props.planet}</p>
        <p>Price: ${props.price}</p>
        <p>Quantity Available: {props.quantity}</p>
      </div>
    </React.Fragment>
  )
}

Spice.propTypes = { // lower camel case because its a property here
  name: PropTypes.string.isRequired,
  heatLevel: PropTypes.number, // upper camel case because its reffering to the library
  description: PropTypes.string,
  planet: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number.isRequired,
  spiceSelected: PropTypes.func
};

export default Spice;