import React from 'react';
import Spice from "./Spice.js";
import PropTypes from "prop-types";

function SpiceInventory(props) {
  return (
    <React.Fragment>
      {
        props.mainSpiceInventory.map((spice) =>
          <Spice name={spice.name}
            heatLevel={spice.heatLevel}
            description={spice.description}
            planet={spice.planet}
            price={spice.price}
            quantity={spice.quantity}
            id={spice.id}
            key={spice.id} />
        )
      }

    </React.Fragment>
  )
}

SpiceInventory.propTypes = {
  mainSpiceInventory: PropTypes.array
}

export default SpiceInventory