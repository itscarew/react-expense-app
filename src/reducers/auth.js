export default (state = {}, action) => {
  if (action.type === "LOGIN") {
    return {
      user: action.user
    };
  } else if (action.type === "LOGOUT") {
    return {};
  } else return state;
};
