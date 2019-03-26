import { ADD_TODO, TOGGLE_TODO } from "../actions/types";

const INITIAL_STATE = {};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_TODO:
      // return {...state, action.payload}
      return {
        ...state,
        [action.payload.id]: {
          content: action.payload.content,
          completed: action.payload.completed
        }
      };
    case TOGGLE_TODO:
      let id = action.payload.id;
      console.log(state);
      return {
        ...state,
        [id]: { content: state[id].content, completed: !state[id].completed }
      };
    default:
      return state;
  }
}
