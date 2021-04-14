const initialState = {
  value: false,
};

export default function checkModal(state = initialState, action) {
  switch (action.type) {
    case 'CHECK_MODAL':
      return {
        ...state,
        value: !state.value,
      };

    default:
      return state;
  }
}
