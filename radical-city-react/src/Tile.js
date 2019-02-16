import React, { Component } from "react";
import Bid from "./modals/Bid";

const types = {
  INDUSTRIAL: "industrial",
  RESIDENTIAL: "residental",
  COMMERCIAL: "commerical"
};

class Tile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      ownerAddr: "0xBEEF",
      type: "",
      rent: 0,
      showModal: false
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    this.setState({ showModal: true });
  }
  handleClose() {
    this.setState({ showModal: false });
  }
  render() {
    return (
      <div style={styles.tile}>
        <Bid
          showModal={this.state.showModal}
          handleOpen={this.handleOpen}
          handleClose={this.handleClose}
        />
        <button className="square" onClick={this.handleOpen}>
          {this.state.rent}
        </button>
      </div>
    );
  }
}
export default Tile;
const styles = {
  tile: {
    backgroundColor: "red"
  }
};