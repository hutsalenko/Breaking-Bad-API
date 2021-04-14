const initialState = {
  value: '',
};

export default function searchUser(state = initialState, action) {
  switch (action.type) {
    case 'VALUE_FROM_INPUT':
      return {
        ...state,
        value: action.payload,
      };

    default:
      return state;
  }
}
