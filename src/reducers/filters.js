import moment from "moment";

//filters reducer
const filterReducerDefaultState = {
  text: "",
  sortBy: "amount",
  startDate: moment().startOf("month"),
  endDate: moment().endOf("month")
};
const filterReducer = (state = filterReducerDefaultState, action) => {
  if (action.type === "SET_TEXT_FILTER") {
    return {
      ...state,
      text: action.text
    };
  } else if (action.type === "SORT_BY_AMOUNT") {
    return {
      ...state,
      sortBy: "amount"
    };
  } else if (action.type === "SORT_BY_DATE") {
    return {
      ...state,
      sortBy: "date"
    };
  } else if (action.type === "SET_START_DATE") {
    return {
      ...state,
      startDate: action.startDate
    };
  } else if (action.type === "SET_END_DATE") {
    return {
      ...state,
      endDate: action.endDate
    };
  } else {
    return state;
  }
};

export default filterReducer;
