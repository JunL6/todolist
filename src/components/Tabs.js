import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

import { VIS_ALL, VIS_IMCOMPLETE, VIS_DONE } from "../actions/types";

class Tabs extends Component {
  renderButton(buttonText, buttonType) {
    const currentVisibility = this.props.visibility;
    if (buttonType === currentVisibility) {
      return (
        <button
          disabled="disabled"
          onClick={() => {
            this.onButtonClick(buttonType);
          }}
        >
          {buttonText}
        </button>
      );
    } else {
      return (
        <button
          onClick={() => {
            this.onButtonClick(buttonType);
          }}
        >
          {buttonText}
        </button>
      );
    }
  }

  onButtonClick(buttonType) {
    this.props.changeVisibility(buttonType);
  }

  render() {
    return (
      <div>
        {this.renderButton("All", VIS_ALL)}
        {this.renderButton("Imcomplete", VIS_IMCOMPLETE)}
        {this.renderButton("Done", VIS_DONE)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    visibility: state.visibility
  };
}

export default connect(
  mapStateToProps,
  actions
)(Tabs);
