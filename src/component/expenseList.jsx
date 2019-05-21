import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./expenseListItem";
import selectExpenses from "../selector/expenses";

const ExpenseList = props => (
  <div>
    <h1>Expense List</h1>
    {props.expense.map(expense => {
      return <ExpenseListItem key={expense.id} {...expense} />;
    })}
  </div>
);

const mapStatetoProps = state => {
  return {
    expense: selectExpenses(state.expense, state.filters)
  };
};

export default connect(mapStatetoProps)(ExpenseList);
