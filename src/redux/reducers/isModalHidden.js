const initialValue = {
  isActive: null,
};

export default function isModalHidden(state = initialValue, action) {
  switch (action.type) {
    case 'SHOW_MODAL':
      return {
        ...state,
        isActive: !state.isActive,
      };
    default:
      return state;
  }
}
