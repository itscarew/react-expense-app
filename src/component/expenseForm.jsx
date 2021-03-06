import React, { Component } from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";

class ExpenseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : "",
      amount: props.expense ? (props.expense.amount / 100).toString() : "",
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      note: props.expense ? props.expense.note : "",
      calenderFocus: false,
      submitError: false
    };
  }

  descriptionChange = e => {
    const description = e.target.value;
    this.setState({ description });
  };

  amountChange = e => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState({ amount });
    }
  };

  noteChange = e => {
    const note = e.target.value;
    this.setState({ note });
  };

  onDateChange = createdAt => {
    if (createdAt) {
      this.setState({ createdAt });
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState({ calenderFocus: focused });
  };

  onSubmit = e => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState({ submitError: true });
    } else {
      this.setState({ submitError: false });
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };
  render() {
    const {
      note,
      createdAt,
      calenderFocus,
      amount,
      description,
      submitError
    } = this.state;
    const { expense } = this.props;
    return (
      <div className="expense__add_container_form_container">
        <h3>
          {submitError ? "Please Provide Your Description And Amount" : ""}
        </h3>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="description / expense "
            autoFocus
            value={description}
            onChange={this.descriptionChange}
          />
          <input
            type="text"
            placeholder="Amount"
            value={amount}
            onChange={this.amountChange}
          />
          <SingleDatePicker
            date={createdAt}
            onDateChange={this.onDateChange}
            focused={calenderFocus}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />

          <textarea
            placeholder="Add a note for your Expense (Optional)"
            value={note}
            onChange={this.noteChange}
          />
          <button type="submit">
            {expense ? "Update Expense" : "Add Expense"}{" "}
          </button>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;
