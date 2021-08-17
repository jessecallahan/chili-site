import React from "react";
import PropTypes from "prop-types";

function SpiceDetail(props) {

  return (
    <div>
      <h1><b>{props.spice.name}'s Ticket</b></h1>
      <p> <em>Description:</em> {props.spice.description} </p>
      <li>Heat Level: {props.spice.heatLevel}</li>
      <li>Planet:{props.spice.planet}</li>
      <li>Price: {props.spice.price}</li>
      <li>Quantity: {props.spice.quantity}</li>
      <button onClick={props.editButtonClick}>{props.buttonText}</button>
    </div>
  );
}

SpiceDetail.prototypes = {
  spice: PropTypes.object,
  buttonText: PropTypes.string,
  editButtonClick: PropTypes.func
}

export default SpiceDetail;

