const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'SUCCESS':
    return {
      ...state,
      currencies: action.payload,
    };
  case 'FAILED':
    return {
      ...state,
      error: action.error,
    };
  default:
    return state;
  }
};

export default wallet;
