const initialState = {
  user: {},
};

export default function userModal(state = initialState, action) {
  switch (action.type) {
    case 'SHOW_PERSON':
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
}
