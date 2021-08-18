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
      editButtonPressed: false,
      pageVisible: "home"
    };
  }

  handleButtonClick = () => {
    if (this.state.selectedSpice != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedSpice: null,
        editButtonPressed: false
      })
    } else {
      this.setState(prevState => (
        { formVisibleOnPage: !prevState.formVisibleOnPage }));
    }
  }
  handleManageButtonClick = () => {
    this.setState({
      pageVisible: "manage"
    })
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

  handleDeleteButton = (id) => {
    const newMasterSpiceInventory = this.state.masterSpiceInventory.filter(spice => spice.id !== id);
    this.setState({
      formVisibleOnPage: false,
      masterSpiceInventory: newMasterSpiceInventory,
      selectedSpice: null
    })

  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.pageVisible === "manage") {
      if (this.state.editButtonPressed) {
        currentlyVisibleState = <EditSpiceForm onEditSpice={this.handleEditSpiceCreation} spice={this.state.selectedSpice} />
        buttonText = "Return to Spice Inventory";
      }
      else if (this.state.formVisibleOnPage) {
        currentlyVisibleState = <NewSpiceForm onNewSpiceCreation={this.handleNewSpiceCreation} />;
        buttonText = "Return to Spice Inventory";
      } else if (this.state.selectedSpice != null) {
        currentlyVisibleState = <SpiceDetail spice={this.state.selectedSpice} editButtonClick={this.handleEditButton} deleteButtonClick={this.handleDeleteButton} buttonText="Edit Spice" buttonText1="Delete Spice" />
        buttonText = "Return to Spice Inventory";
      }
      else {
        currentlyVisibleState = <SpiceInventory mainSpiceInventory={this.state.masterSpiceInventory} spiceSelected={this.handleSelectedSpice} />
        buttonText = "Add Spice to Inventory";
      }

      return (
        <React.Fragment>
          {currentlyVisibleState}
          <button onClick={this.handleButtonClick}>{buttonText}</button>
        </React.Fragment>
      )
    }

    // else if (this.state.pageVisible === "customer") {
    //   ///customer side
    // }



    else {
      return (
        <React.Fragment>
          <p>Please Select if you are Management or a Consumer</p>
          <button onClick={this.handleManageButtonClick}>Manager Page</button>
          <button onClick={this.handleBuyerButtonClick}>Buyer Page</button>
        </React.Fragment>
      )


    }

  }
}

export default SpiceControl;