import database from "../firebase/firebase";

// import uuid from 'uuid';

//ADD EXPENSE GENERATOR
export const addExpense = expense => ({
  type: "ADD_EXPENSE",
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.user.uid;
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0
    } = expenseData;

    const expense = { description, note, amount, createdAt };

    database
      .ref(`users/${uid}/expense`)
      .push(expense)
      .then(ref => {
        dispatch(addExpense({ id: ref.key, ...expense }));
      });
  };
};

//REMOVE EXPENSE GENERATOR
export const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});

export const setRemoveExpense = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.user.uid;
    database
      .ref(`users/${uid}/expense/${id}`)
      .remove()
      .then(ref => {
        dispatch(removeExpense({ id }));
      });
  };
};

//EDIT EXPENSE GENERATOR
export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});

export const startEditExpense = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.user.uid;
    database
      .ref(`users/${uid}/expense/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editExpense(id, updates));
      });
  };
};

//SET_EXPENSES
export const setExpenses = expense => ({
  type: "SET_EXPENSES",
  expense
});

export const startSetExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.user.uid;
    return database
      .ref(`users/${uid}/expense`)
      .once("value")
      .then(snapshot => {
        const expense = [];

        snapshot.forEach(childexpense => {
          expense.push({
            id: childexpense.key,
            ...childexpense.val()
          });
        });

        dispatch(setExpenses(expense));
      });
  };
};

export const removeAll = () => ({
  type: "REMOVE_ALL"
});

export const setRemoveAll = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.user.uid;
    return database
      .ref(`users/${uid}/expense`)
      .set(null)
      .then(() => {
        dispatch(removeAll());
      });
  };
};
