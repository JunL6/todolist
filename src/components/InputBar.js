import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class InputBar extends Component {
  constructor(props) {
    super(props);
    this.inputNode = "";
  }

  // componentDidUpdate() {
  //   console.log(this.props.state);
  // }

  render() {
    return (
      <form
        onSubmit={event => {
          event.preventDefault();
          let todoContent = this.inputNode.value;
          if (!todoContent.trim()) {
            return;
          }
          // console.log(todoContent);
          this.props.addTodo(todoContent);
          this.inputNode.value = "";
        }}
      >
        <input ref={node => (this.inputNode = node)} />
        <button>Add</button>
      </form>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     state
//   };
// }

export default connect(
  // mapStateToProps,
  null,
  actions
)(InputBar);
