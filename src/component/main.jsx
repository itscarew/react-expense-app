import React, { Component } from "react";
import ExpenseList from "./expenseList";
import ExpenseListFilter from "./expenseListFilter";
import "../firebase/firebase";
import ExpenseSummary from "./expenseSummary";

class Main extends Component {
  state = {};
  render() {
    return (
      <div>
        <ExpenseSummary />
        <ExpenseListFilter />
        <ExpenseList />
      </div>
    );
  }
}

export default Main;
