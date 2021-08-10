import React from "react";
import chilliHeader from "./../img/chili.png"

function Header() {
  const headerStyle = {
    // width: '100%',
    border: 'solid red',
    color: 'green',
    size: '400'
  }

  return (
    <div style={headerStyle}>

      <img style={headerStyle} src={chilliHeader} alt="header with chillis" />
      <p>THE CHILLIES ARE GONNA GET US</p>

    </div>
  );
}

export default Header