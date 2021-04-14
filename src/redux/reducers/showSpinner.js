const initialState = {
  value: false,
};

export default function showSpinner(state = initialState, action) {
  switch (action.type) {
    case 'CHECK_SPINNER':
      return {
        ...state,
        value: action.payload,
      };

    default:
      return state;
  }
}
