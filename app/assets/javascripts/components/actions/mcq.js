export const SELECT_OPTION = 'SELECT_OPTION';
export const SELECT_OPTION2 = 'SELECT_OPTION2';

export function selectOption(selection) {
  return {
    type: SELECT_OPTION,
    selection: selection
  };
}

export function selectOption2(selection) {
  return {
    type: SELECT_OPTION2,
    selection: selection
  };
}
