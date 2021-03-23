const initialValue = {
  showModal: false,
};

export default function isFormHidden(state = initialValue, action) {
  switch (action.type) {
    case 'SHOW_FORM':
      return {
        ...state,
        showModal: action.payload,
      };
    default:
      return state;
  }
}
