import React from 'react'
import PropTypes from "prop-types"


export default function ReusableForm(props) {
  if (props.spice) {
    return (
      <React.Fragment>
        <form onSubmit={props.formSubmissionHandler}>
          <input type='text' name='name' value={props.spice.name} />
          <input type='number' name='heatLevel' value={props.spice.heatLevel} />
          <input type='text' name='description' value={props.spice.planet} />
          <input type='text' name='planet' value={props.spice.planet} />
          <input type='number' name='price' value={props.spice.price} />
          <input type='number' name='quantity' value={props.spice.quantity} />
          <button type='submit'>{props.buttonText}</button>
        </form>
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        <form onSubmit={props.formSubmissionHandler}>
          <input type='text' name='name' PlaceHolder='Name' />
          <input type='number' name='heatLevel' Placeholder='Heat Level' />
          <input type='text' name='description' Placeholder='Description' />
          <input type='text' name='planet' Placeholder='Planet' />
          <input type='number' name='price' Placeholder='Price' />
          <input type='number' name='quantity' Placeholder='Quantity' />
          <button type='submit'>{props.buttonText}</button>
        </form>
      </React.Fragment>
    )
  }
}

ReusableForm.propTypes = {
  spice: PropTypes.object,
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}