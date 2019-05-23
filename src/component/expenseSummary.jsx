import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import selectExpensesTotal from "../selector/expense-total";
import selectExpenses from "../selector/expenses";

export const ExpenseSummary = ({ expenseCount, expenseTotal }) => {
  const formattedExpenseTotal = numeral(expenseTotal / 100).format("$0,0.00");
  return (
    <div>
      <h1>
        Viewing {expenseCount} {expenseCount < 2 ? "expense" : "expenses"}{" "}
        totalling {formattedExpenseTotal}
      </h1>
    </div>
  );
};

const mapStateToProps = state => {
  const visibleExpenses = selectExpenses(state.expense, state.filters);
  return {
    expenseCount: visibleExpenses.length,
    expenseTotal: selectExpensesTotal(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpenseSummary);
