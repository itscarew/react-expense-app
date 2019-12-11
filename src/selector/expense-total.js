export default expense => {
  return expense
    .map(expense => expense.amount)
    .reduce((sum, val) => sum + val, 0);
};
