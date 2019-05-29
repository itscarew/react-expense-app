import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";

class ExpenseListItem extends Component {
  render() {
    const { description, id, amount, createdAt, note } = this.props;
    return (
      <NavLink to={`/edit/${id}`}>
        <div className="expense-list">
          <div>
            <h3>{description}</h3>
            <p>{moment(createdAt).format("MMM Do, YYYY")}</p>
            <p>{note ? note : "no details specified ....."}</p>
          </div>
          <div>
            <p>{numeral(amount / 100).format("$0,0.00")}</p>
          </div>
        </div>
      </NavLink>
    );
  }
}

export default ExpenseListItem;
