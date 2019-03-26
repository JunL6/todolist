import { ADD_TODO, TOGGLE_TODO, CHANGE_VIS } from "./types";

let nextTodoId = 0;

export const addTodo = todoContent => {
  return {
    type: ADD_TODO,
    // payload: {
    //   [nextTodoId++]: { content: todoContent, completed: false }
    // }
    payload: {
      id: nextTodoId++,
      content: todoContent,
      completed: false
    }
  };
};

export const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    payload: { id }
  };
};

export const changeVisibility = buttonType => {
  return { type: CHANGE_VIS, payload: buttonType };
};
