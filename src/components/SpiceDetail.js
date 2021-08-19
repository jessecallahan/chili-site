import React from "react";
import PropTypes from "prop-types";

function SpiceDetail(props) {

  function handleBuy(event) {

    event.preventDefault();
    props.buyButtonClick({
      name: props.spice.name, heatLevel: props.spice.heatLevel, description: props.spice.description,
      planet: props.spice.planet, price: props.spice.price, quantity: props.spice.quantity - event.target.quantity.value,
      moneyMade: props.spice.moneyMade + (event.target.quantity.value * props.spice.price), salePrice: "+" + event.target.quantity.value * props.spice.price, id: props.spice.id
    })
    props.buttonStateFunc(event.target.quantity.value * props.spice.price)
  }

  let show = null;

  if (props.pageVisible === "manage") {
    show = <div>
      <p><button onClick={props.editButtonClick}>{props.buttonText}</button></p>
      <p><button onClick={() => props.deleteButtonClick(props.spice.id)}>{props.buttonText1}</button></p>
    </div>
  } else {
    show = <div>
      <form onSubmit={handleBuy}>
        Quanity you want:
        <input type='number' name='quantity' placeholder='Quanity'></input>
        <button type='submit'>{props.buttonText}</button>
      </form>
    </div>
  }
  return (
    <React.Fragment>
      <div className="spicelist" >
        <div className="row">
          <div className="column">
            <h2>{props.spice.name}'s Ticket</h2>
            <p><em>{props.spice.description}</em>  </p>
            <p>Heat Level: {props.spice.heatLevel}</p>
            <p>Planet:{props.spice.planet}</p>
            <p>Price: {props.spice.price}</p>
            <p>Quantity: {props.spice.quantity}</p>
            <p>Money Made: ${props.spice.moneyMade}</p>
            {props.buttonState}
          </div>
          <div className="column">
            {show}
          </div>
        </div>
      </div>

    </React.Fragment >
  );

}

SpiceDetail.prototypes = {
  spice: PropTypes.object,
  buttonText: PropTypes.string,
  editButtonClick: PropTypes.func,
  deleteButtonClick: PropTypes.func,
  buttonText1: PropTypes.string,
  buyButtonClick: PropTypes.func,
  pageVisible: PropTypes.string,
  buttonStateFunc: PropTypes.func,
  buttonState: PropTypes.string
}

export default SpiceDetail;

