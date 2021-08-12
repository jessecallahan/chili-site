import React from 'react';
import Spice from "./Spice.js";
import PropTypes from "prop-types";

function SpiceInventory(props) {
  return (
    <React.Fragment>
      {
        props.spiceInventory.map((spice) =>
          <Spice name={spice.name}
            heatLevel={spice.location}
            description={spice.issue}
            planet={spice.planet}
            cost={spice.cost}
            quantity={spice.quantity}
            id={spice.id}
            key={spice.id} />
        )
      }
    </React.Fragment>
  )
}

SpiceInventory.propTypes = {
  spiceInventory: PropTypes.array
}

export default SpiceInventory