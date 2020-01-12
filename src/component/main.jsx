import React from "react";
import ExpenseList from "./expenseList";
import ExpenseListFilter from "./expenseListFilter";
import "../firebase/firebase";
import ExpenseSummary from "./expenseSummary";

const Main = () => (
  <div className="expenses">
    <div className="contain">
      <div className="expenses__summary_container">
        <ExpenseSummary />
        <ExpenseListFilter />
      </div>
      <div className="expenses__list_container">
        <ExpenseList />
      </div>
    </div>
  </div>
);

export default Main;
