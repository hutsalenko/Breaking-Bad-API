const initialValue = {
  person: {},
};

export default function getPerson(state = initialValue, action) {
  switch (action.type) {
    case 'GET_PERSON':
      return {
        ...state,
        person: action.payload,
      };
    default:
      return state;
  }
}
