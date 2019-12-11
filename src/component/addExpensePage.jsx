import React from "react";
import { startAddExpense } from "../actions/expenses";
import { connect } from "react-redux";
import ExpenseForm from "./expenseForm";

const AddExpense = props => (
  <div className="expense__add">
    <div className="expense__add_container">
      <h1>Add Expense </h1>
      <ExpenseForm
        onSubmit={expense => {
          props.dispatch(startAddExpense(expense));
          props.history.push("/main");
        }}
      />
    </div>
  </div>
);

export default connect()(AddExpense);
