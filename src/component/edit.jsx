import React from "react";
import { editExpense } from "../actions/expenses";
import ExpenseForm from "./expenseForm";
import { connect } from "react-redux";
import { removeExpense } from "../actions/expenses";

const Edit = props => {
  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={expense => {
          props.dispatch(editExpense(props.expense.id, expense));
          props.history.push("/");
        }}
      />
      <button
        onClick={() => {
          props.dispatch(removeExpense({ id: props.expense.id }));
          props.history.push("/");
        }}
      >
        Remove
      </button>
    </div>
  );
};

const MapStateToProps = (state, props) => {
  return {
    expense: state.expense.find(expense => {
      return expense.id === props.match.params.id;
    })
  };
};

export default connect(MapStateToProps)(Edit);
