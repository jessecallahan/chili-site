import React from 'react';
import NewSpiceForm from './NewSpiceForm';
import SpiceInventory from './SpiceInventory';

class SpiceControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterSpiceInventory: [
        {
          name: "Diamond Spice",
          heatLevel: 10,
          description: "Spicey Glittery spice",
          planet: "Nepulon",
          price: 100,
          quantity: 100,
          id: 1
        }
      ]
    };
  }

  handleClick = () => {
    this.setState(prevState => (
      { formVisibleOnPage: !prevState.formVisibleOnPage }));
  }

  handleNewSpiceCreation = (spice) => {
    const newMasterSpiceInventory = this.state.masterSpiceInventory.concat(spice);
    this.setState({
      masterSpiceInventory: newMasterSpiceInventory,
      formVisibleOnPage: false
    })
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewSpiceForm onNewSpiceCreation={this.handleNewSpiceCreation} />;
      buttonText = "Return to Spice Inventory";
    } else {
      currentlyVisibleState = <SpiceInventory mainSpiceInventory={this.state.masterSpiceInventory} />
      buttonText = "Add Spice";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    )
  }
}

export default SpiceControl;