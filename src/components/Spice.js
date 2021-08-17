import React from 'react';
import PropTypes from 'prop-types';

function Spice(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.spiceSelected(props.id)}>
        <h2>{props.name}</h2>
        <ul>
          <li>Description: {props.description}</li>
          <li>Heat Level: {props.heatLevel}</li>
          <li>Origin Planet: {props.planet}</li>
          <li>Price: ${props.price}</li>
          <li>Quantity Available: {props.quantity}</li>
        </ul>
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