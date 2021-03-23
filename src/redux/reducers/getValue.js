const initialValue = {
  showForm: false,
};

export default function getValue(state = initialValue, action) {
  switch (action.type) {
    case 'SHOW':
      return {
        ...state,
        showForm: !state.showForm,
      };
    default:
      return state;
  }
}
