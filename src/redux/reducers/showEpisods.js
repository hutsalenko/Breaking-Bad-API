const initialState = {
  episods: [],
};

export default function showEpisods(state = initialState, action) {
  switch (action.type) {
    case 'GET_EPISODS':
      return {
        ...state,
        episods: action.payload,
      };

    default:
      return state;
  }
}
