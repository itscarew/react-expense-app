//expense Reducer
const expenseReducerDefaultState = [];

const expenseReducer = (state = expenseReducerDefaultState, action) => {
  if (action.type === "ADD_EXPENSE") {
    return [action.expense, ...state];
  } else if (action.type === "REMOVE_EXPENSE") {
    return state.filter(({ id }) => id !== action.id);
  } else if (action.type === "EDIT_EXPENSE") {
    return state.map(expense => {
      if (expense.id === action.id) {
        return {
          ...expense,
          ...action.updates
        };
      } else {
        return expense;
      }
    });
  } else if (action.type === "SET_EXPENSES") {
    return action.expense;
  } else if (action.type === "REMOVE_ALL") {
    return (state = []);
  } else {
    return state;
  }
};

export default expenseReducer;
