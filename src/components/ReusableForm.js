import React from 'react'
import PropTypes from "prop-types"


export default function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input type='text' name='name' placeholder='Spice Name' />
        <input type='number' name='heatLevel' placeholder='Heat Level' />
        <input type='text' name='description' placeholder='Description' />
        <input type='text' name='planet' placeholder='Planet' />
        <input type='number' name='price' placeholder='Price' />
        <input type='number' name='quantity' placeholder='Quantity' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  )
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}