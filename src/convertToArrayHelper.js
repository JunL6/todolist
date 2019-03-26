import { VIS_ALL, VIS_IMCOMPLETE, VIS_DONE } from "./actions/types";

export function convertToArrayHelper(vis, obj) {
  let arr = [];
  for (let i in obj) {
    arr.push({ id: i, content: obj[i].content, completed: obj[i].completed });
  }
  return filterArrayWtihVisibility(vis, arr);
}

function filterArrayWtihVisibility(vis, arr) {
  switch (vis) {
    case VIS_ALL:
      return arr;
    case VIS_IMCOMPLETE:
      return arr.filter(todo => todo.completed === false);
    case VIS_DONE:
      return arr.filter(todo => todo.completed);
  }
}
