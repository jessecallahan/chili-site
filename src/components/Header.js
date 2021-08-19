import React from "react";
import chilliHeader from "./../img/SpiceDepot.png"

function Header() {
  const headerStyle = {
    // width: '100%',
    size: '400',
    fontFamily: 'spaceFont',
    fontSize: 60,
    color: 'yellow'
  }

  return (
    <div style={headerStyle}>
      <div id="space">
        <div className="stars"></div>
        <div className="stars"></div>
        <div className="stars"></div>
        <div className="stars"></div>
        <div className="stars"> </div>

      </div>


      <div className="row">
        <div className="column">  The international Spice Station!</div>


        <div className="column"><img style={headerStyle} src={chilliHeader} alt="header with chillis" />
        </div>


      </div>
    </div>
  );
}

export default Header

