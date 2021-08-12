import React from 'react';
import PropTypes from 'prop-types';

function Spice(props) {
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <h2>{props.description}</h2>
      <ul>
        <li>Heat Level: {props.heatLevel}</li>
        <li>Origin Planet: {props.planet}</li>
        <li>Cost: {props.cost}</li>
        <li>Quantity Available: {props.quantity}</li>
      </ul>
    </React.Fragment>
  )
}

Spice.propTypes = { // lower camel case because its a property here
  name: PropTypes.string.isRequired,
  heatLevel: PropTypes.number, // upper camel case because its reffering to the library
  description: PropTypes.string,
  planet: PropTypes.string,
  cost: PropTypes.number,
  quantity: PropTypes.number.isRequired
};

export default Spice;