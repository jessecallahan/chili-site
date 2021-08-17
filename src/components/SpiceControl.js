import React from 'react';
import NewSpiceForm from './NewSpiceForm';
import SpiceDetail from './SpiceDetail';
import SpiceInventory from './SpiceInventory';
import EditSpiceForm from './EditSpiceForm';

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
      ],
      selectedSpice: null,
      editButtonPressed: false
    };
  }

  handleButtonClick = () => {
    if (this.state.selectedSpice != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedSpice: null
      })
    } else {
      this.setState(prevState => (
        { formVisibleOnPage: !prevState.formVisibleOnPage }));
    }
  }

  handleSelectedSpice = (id) => {
    const newSelectedSpice = this.state.masterSpiceInventory.filter(spice => spice.id === id)[0]
    this.setState({ selectedSpice: newSelectedSpice })
  }

  handleNewSpiceCreation = (spice) => {
    const newMasterSpiceInventory = this.state.masterSpiceInventory.concat(spice);
    this.setState({
      masterSpiceInventory: newMasterSpiceInventory,
      formVisibleOnPage: false
    })
  }

  handleEditSpiceCreation = (spice) => {
    const newMasterSpiceInventory = this.state.masterSpiceInventory.filter(spice => spice.id !== this.state.selectedSpice.id).concat(spice)
    this.setState({
      masterSpiceInventory: newMasterSpiceInventory,
      // formVisibleOnPage: false,
      editButtonPressed: false,
      selectedSpice: spice
    })

  }
  handleEditButton = () => {
    this.setState({ editButtonPressed: true })
  }
  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editButtonPressed === true) {
      currentlyVisibleState = <EditSpiceForm onEditSpice={this.handleEditSpiceCreation} spice={this.state.selectedSpice} />
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewSpiceForm onNewSpiceCreation={this.handleNewSpiceCreation} />;
      buttonText = "Return to Spice Inventory";
    } else if (this.state.selectedSpice != null) {
      currentlyVisibleState = <SpiceDetail spice={this.state.selectedSpice} editButtonClick={this.handleEditButton} buttonText="Edit Spice" />
      buttonText = "Return to Spice Inventory";
    }
    else {
      currentlyVisibleState = <SpiceInventory mainSpiceInventory={this.state.masterSpiceInventory} spiceSelected={this.handleSelectedSpice} />
      buttonText = "Add Spice";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleButtonClick}>{buttonText}</button>
      </React.Fragment>
    )
  }
}

export default SpiceControl;