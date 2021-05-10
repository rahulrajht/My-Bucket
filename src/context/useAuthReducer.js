export const data = {
  user: "",
  isUserLogin: false
};

const SET_USER = "setUser";

export function reducer(state, { type, currentUser, loginValue }) {
  const { isUserLogin, user } = state;

  switch (type) {
    case SET_USER:
      return {
        ...state,
        user: currentUser
      };

    default:
      return state;
  }
}
