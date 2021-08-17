import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from "./ReusableForm";

export default function NewSpiceForm(props) {

  function handleNewSpiceFormSubmission(event) {
    event.preventDefault();
    props.onNewSpiceCreation({ name: event.target.name.value, heatLevel: parseInt(event.target.heatLevel.value), description: event.target.description.value, planet: event.target.planet.value, price: parseInt(event.target.price.value), quantity: parseInt(event.target.quantity.value), id: v4() })
  }

  return (
    <React.Fragment>
      <ReusableForm formSubmissionHandler={handleNewSpiceFormSubmission} buttonText="Add the Spice" />
    </React.Fragment>
  );
}

NewSpiceForm.propTypes = {
  onNewSpiceCreation: PropTypes.func
};