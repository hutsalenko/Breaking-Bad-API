const initialValue = {
  actives: null,
};

export default function isModalHidden(state = initialValue, action) {
  switch (action.type) {
    case 'SHOW_MODAL':
      return {
        ...state,
        actives: !state.actives,
      };
    default:
      return state;
  }
}
