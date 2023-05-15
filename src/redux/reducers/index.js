// import user from './user';
// import wallet from './wallet';

const INITIAL_STATE = {
  personalData: {
    email: '',
  },
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'LOGIN':
    return {
      ...state,
      email: action.payload.email,
    };
  default:
    return state;
  }
};

export default reducer;
