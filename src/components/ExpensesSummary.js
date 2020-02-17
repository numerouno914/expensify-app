import React from 'react';
import { connect } from 'react-redux';
import getVisibleExpenses from '../selectors/expenses';
import getTotalExpenses from '../selectors/expensesTotal';
import numeral from 'numeral';

 export const ExpensesSummary = (props) => {
  const numberOfExpenses = props.expenses.length;
  const expensesTotal = getTotalExpenses(props.expenses);
  const formattedTotal = numeral(expensesTotal / 100).format('$0,0.00');
  const expenseWord = numberOfExpenses === 1 ? 'expense' : 'expenses';
  return (
    <div>
      <h1>Viewing {numberOfExpenses} {expenseWord} totalling {formattedTotal} </h1>
    </div>
  );
};

const mapStateToProps = (state) => ({
  expenses: getVisibleExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpensesSummary);