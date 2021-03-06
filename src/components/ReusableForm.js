import React from 'react'
import PropTypes from "prop-types"


export default function ReusableForm(props) {
  if (props.spice) {
    return (
      <React.Fragment>
        <form onSubmit={props.formSubmissionHandler}>
          <input type='text' name='name' defaultValue={props.spice.name} />
          <input type='number' name='heatLevel' defaultValue={props.spice.heatLevel} />
          <input type='text' name='description' defaultValue={props.spice.planet} />
          <input type='text' name='planet' defaultValue={props.spice.planet} />
          <input type='number' name='price' defaultValue={props.spice.price} />
          <input type='number' name='quantity' defaultValue={props.spice.quantity} />
          <button type='submit'>{props.buttonText}</button>
        </form>
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        <form onSubmit={props.formSubmissionHandler}>
          <input type='text' name='name' placeholder='Name' />
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
}

ReusableForm.propTypes = {
  spice: PropTypes.object,
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}