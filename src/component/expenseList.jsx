import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./expenseListItem";
import selectExpenses from "../selector/expenses";
import { setRemoveAll } from "../actions/expenses";

const ExpenseList = props => (
  <div>
    {props.expense.length < 2 ? (
      ""
    ) : (
      <button
        onClick={() => {
          props.dispatch(setRemoveAll(props.expense));
        }}
      >
        Delete All
      </button>
    )}

    {props.expense.length === 0 ? (
      <h4>You Have No Expense List Available</h4>
    ) : (
      props.expense.map(expense => {
        return <ExpenseListItem key={expense.id} {...expense} />;
      })
    )}
  </div>
);

const mapStatetoProps = state => {
  return {
    expense: selectExpenses(state.expense, state.filters)
  };
};

export default connect(mapStatetoProps)(ExpenseList);
