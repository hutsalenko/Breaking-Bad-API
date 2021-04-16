const initialState = {
  characters: [],
};

export default function showCharacters(state = initialState, action) {
  switch (action.type) {
    case 'SET_CHARACTERS':
      return {
        ...state,
        characters: action.payload,
      };

    default:
      return state;
  }
}
