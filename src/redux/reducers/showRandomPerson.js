const initialState = {
  user: {},
};

export default function showRandomPerson(state = initialState, action) {
  switch (action.type) {
    case 'SET_PERSON':
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
}
