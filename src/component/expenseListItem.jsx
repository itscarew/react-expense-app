import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";

class ExpenseListItem extends Component {
  render() {
    const { description, id, amount, createdAt, note } = this.props;
    return (
      <div>
        <NavLink to={`/edit/${id}`}>
          <h3>{description}</h3>
        </NavLink>
        <p>{numeral(amount / 100).format("$0,0.00")}</p>
        <p>{moment(createdAt).format("MMM Do, YYYY")}</p>
        <p>{note ? note : "no details specified ....."}</p>
      </div>
    );
  }
}

export default ExpenseListItem;
