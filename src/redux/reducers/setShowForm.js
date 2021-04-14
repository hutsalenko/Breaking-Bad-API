const initialState = {
  value: false,
};

export default function setShowForm(state = initialState, action) {
  switch (action.type) {
    case 'SHOW_FORM':
      return {
        ...state,
        value: !state.value,
      };

    default:
      return state;
  }
}
