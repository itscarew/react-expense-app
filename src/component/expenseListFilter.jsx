import React, { Component } from "react";
import { connect } from "react-redux";
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from "../actions/filters";
import { DateRangePicker } from "react-dates";

class ExpenseListFilter extends Component {
  state = {
    calenderFocused: null
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  onFocusChange = calenderFocused => {
    this.setState({ calenderFocused });
  };
  render() {
    const { filters } = this.props;
    const { calenderFocused } = this.state;
    return (
      <div className="expenses__summary_container_filter">
        <input
          type="text"
          placeholder="Search Expenses"
          defaultValue={filters.text}
          onChange={e => {
            this.props.dispatch(setTextFilter(e.target.value));
            console.log(e.target.value);
          }}
        />
        <select
          value={filters.sortBy}
          onChange={e => {
            if (e.target.value === "date") {
              this.props.dispatch(sortByDate());
            } else if (e.target.value === "amount") {
              this.props.dispatch(sortByAmount());
            }
          }}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={filters.startDate}
          endDate={filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={calenderFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={2}
          isOutsideRange={() => false}
          showClearDates={true}
          startDateId="Date Range Start"
          endDateId="Date Range End"
          noBorder
        />
      </div>
    );
  }
}

const MapStateToProps = state => {
  return {
    filters: state.filters
  };
};

export default connect(MapStateToProps)(ExpenseListFilter);
