import React from "react";
import PropTypes from "prop-types";

function SpiceDetail(props) {

  return (
    <div className="spicelist">
      <div className="row">
        <div className="column">
          <h2>{props.spice.name}'s Ticket</h2>
          <p><em>{props.spice.description}</em>  </p>
          <p>Heat Level: {props.spice.heatLevel}</p>
          <p>Planet:{props.spice.planet}</p>
          <p>Price: {props.spice.price}</p>
          <p>Quantity: {props.spice.quantity}</p>
        </div>
        <div className="column">
          <p><button onClick={props.editButtonClick}>{props.buttonText}</button></p>
          <p><button onClick={() => props.deleteButtonClick(props.spice.id)}>{props.buttonText1}</button></p>
        </div>
      </div>
    </div>
  );
}

SpiceDetail.prototypes = {
  spice: PropTypes.object,
  buttonText: PropTypes.string,
  editButtonClick: PropTypes.func,
  deleteButtonClick: PropTypes.func,
  buttonText1: PropTypes.string
}

export default SpiceDetail;

