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
    <div>
      <ReusableForm
        formSubmissionHandler={handleEditSpiceFormSubmission}
        buttonText="Update Spice" />
    </div>
  )
}

EditSpiceForm.propTypes = {
  spice: PropTypes.object,
  onEditSpice: PropTypes.func
}

export default EditSpiceForm

