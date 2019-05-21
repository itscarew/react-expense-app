import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class ExpenseListItem extends Component {
  render() {
    const { description, id, amount, createdAt, note } = this.props;
    return (
      <div>
        <NavLink to={`/edit/${id}`}>
          <h3>{description}</h3>
        </NavLink>

        <p>
          {amount} - {createdAt}
        </p>
        <p>{note ? note : "no details specified ....."}</p>
      </div>
    );
  }
}

export default ExpenseListItem;
