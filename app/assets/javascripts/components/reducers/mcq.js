import { SELECT_OPTION, SELECT_OPTION2 } from '../actions/mcq';

export function mcqReducer(state = {}, action) {
  switch (action.type) {
  case SELECT_OPTION:
    return Object.assign({}, state, {
      selectedOption: "1 - select"
    });
  case SELECT_OPTION2:
    return Object.assign({}, state, {
      selectedOption2: "2 - select"
    });
  default:
    return state;
  }
}

export function mcqReducer2(state = {}, action) {
  switch (action.type) {
  case SELECT_OPTION:
    return Object.assign({}, state, {
      selectedOption3: "3 - select"
    });
  case SELECT_OPTION2:
    return Object.assign({}, state, {
      selectedOption4: "4 - select"
    });
  default:
    return state;
  }
}
// export default function mcqReducer2(state = {}, action) {
//   switch (action.type) {
//   case SELECT_OPTION:
//     return Object.assign({}, state, {
//       selectedOption2: false
//     });
//   default:
//     return Object.assign({}, state, {
//       selectedOption2: true
//     });
//   }
// }
