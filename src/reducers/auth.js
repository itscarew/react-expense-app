export default (state = {}, action) => {
  if (action.type === "LOGIN") {
    return {
      uid: action.uid
    };
  } else if (action.type === "LOGOUT") {
    return {};
  } else return state;
};
