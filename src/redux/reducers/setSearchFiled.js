const initialState = {
  search: '',
};

export default function setSearchFiled(state = initialState, action) {
  console.log(action);

  switch (action.type) {
    case 'FILTER':
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
}
