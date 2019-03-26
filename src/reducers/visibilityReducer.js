import { VIS_ALL, CHANGE_VIS } from "../actions/types";

const INITIAL_STATE = VIS_ALL;

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_VIS:
      return action.payload;
    default:
      return state;
  }
}
