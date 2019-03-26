import React, { Component } from "react";
import { connect } from "react-redux";
import { convertToArrayHelper } from "../convertToArrayHelper";
import * as actions from "../actions";

class TodoList extends Component {
  renderList(todoList) {
    // console.log(todoList);
    return (
      <ul>
        {todoList.map(todo => {
          if (todo.completed) {
            return (
              <li key={todo.id} style={{ textDecoration: "line-through" }}>
                {todo.content}
              </li>
            );
          } else {
            return (
              <li
                key={todo.id}
                onClick={() => {
                  this.props.toggleTodo(todo.id);
                }}
              >
                {todo.content}
              </li>
            );
          }
        })}
      </ul>
    );
  }
  render() {
    return (
      <div>
        {this.renderList(
          convertToArrayHelper(
            this.props.currentVisibility,
            this.props.todoListObject
          )
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todoListObject: state.todoList,
    currentVisibility: state.visibility
  };
}

export default connect(
  mapStateToProps,
  actions
)(TodoList);
