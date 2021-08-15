import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function NewSpiceForm(props) {

  function handleNewSpiceFormSubmission(event) {
    event.preventDefault();
    props.onNewSpiceCreation({ name: event.target.name.value, heatLevel: parseInt(event.target.heatLevel.value), description: event.target.description.value, planet: event.target.planet.value, price: parseInt(event.target.price.value), quantity: parseInt(event.target.quantity.value), id: v4() })
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewSpiceFormSubmission}>
        <input type='text' name='name' placeholder='Spice Name' />
        <input type='number' name='heatLevel' placeholder='Heat Level' />
        <input type='text' name='description' placeholder='Description' />
        <input type='text' name='planet' placeholder='Planet' />
        <input type='number' name='price' placeholder='Price' />
        <input type='number' name='quantity' placeholder='Quantity' />
        <button type='submit'>Add a Spice</button>
      </form>
    </React.Fragment>
  );
}

NewSpiceForm.propTypes = {
  onNewSpiceCreation: PropTypes.func
};

export default NewSpiceForm;

