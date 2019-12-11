import React, { Component } from "react";
import { startEditExpense } from "../actions/expenses";
import ExpenseForm from "./expenseForm";
import { connect } from "react-redux";
import { setRemoveExpense } from "../actions/expenses";
import Modal from "react-modal";

class Edit extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }
  render() {
    const { modalIsOpen } = this.state;
    const customStyles = {
      content: {
        top: "50%",
        left: "50%",
        width: "40%",
        height: "auto",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)"
      },
      overlay: {
        backgroundColor: "#232020",
        opacity: "95%",
        zIndex: 3
      }
    };
    return (
      <div className="expense__add">
        <div className="expense__add_container">
          <h1>Edit Expense </h1>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <h1>Are You Sure ?</h1>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <button
                className="expense__add_container_remove"
                onClick={() => {
                  this.props.dispatch(
                    setRemoveExpense({ id: this.props.expense.id })
                  );
                  this.props.history.push("/main");
                }}
              >
                Yes
              </button>{" "}
              <button
                onClick={this.closeModal}
                className="expense__add_container_remove"
              >
                No
              </button>
            </div>
          </Modal>
          <ExpenseForm
            expense={this.props.expense}
            onSubmit={expense => {
              this.props.dispatch(
                startEditExpense(this.props.expense.id, expense)
              );
              this.props.history.push("/main");
            }}
          />
          <button
            className="expense__add_container_remove"
            onClick={this.openModal}
          >
            Remove
          </button>
        </div>
      </div>
    );
  }
}
const MapStateToProps = (state, props) => {
  return {
    expense: state.expense.find(expense => {
      return expense.id === props.match.params.id;
    })
  };
};

export default connect(MapStateToProps)(Edit);
