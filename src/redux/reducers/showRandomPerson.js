const initialState = {
  user: {},
};

export default function showRandomPerson(state = initialState, action) {
  switch (action.type) {
    case 'GET_PERSON':
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
}
