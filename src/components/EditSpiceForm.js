import React from 'react'
import PropTypes from 'prop-types'
import ReusableForm from './ReusableForm'



function EditSpiceForm(props) {
  const { spice } = props
  function handleEditSpiceFormSubmission(event) {
    event.preventDefault();
    props.onEditSpice({ name: event.target.name.value, heatLevel: parseInt(event.target.heatLevel.value), description: event.target.description.value, planet: event.target.planet.value, price: parseInt(event.target.price.value), quantity: parseInt(event.target.quantity.value), id: spice.id })
  }

  return (
    <React.Fragment>
      <div className="spicelist">
        <b>{spice.name}'s Ticket</b>
        <p> <em>Description:</em> {spice.description} </p>
        <li>Heat Level: {spice.heatLevel}</li>
        <li>Planet:{spice.planet}</li>
        <li>Price: {spice.price}</li>
        <li>Quantity: {spice.quantity}</li>
        <ReusableForm
          spice={spice}
          formSubmissionHandler={handleEditSpiceFormSubmission}
          buttonText="Update Spice" />
      </div>
    </React.Fragment >
  )
}

EditSpiceForm.propTypes = {
  spice: PropTypes.object,
  onEditSpice: PropTypes.func
}

export default EditSpiceForm

