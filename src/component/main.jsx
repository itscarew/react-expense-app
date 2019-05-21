import React, { Component } from "react";
import ExpenseList from "./expenseList";
import ExpenseListFilter from "./expenseListFilter";
import "../firebase/firebase";

class Main extends Component {
  state = {};
  render() {
    return (
      <div>
        <ExpenseListFilter />
        <ExpenseList />
      </div>
    );
  }
}

export default Main;
