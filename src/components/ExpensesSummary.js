import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import getVisibleExpenses from '../selectors/expenses';
import getTotalExpenses from '../selectors/expensesTotal';
import numeral from 'numeral';

 export const ExpensesSummary = (props) => {
  const numberOfExpenses = props.expenses.length;
  const expensesTotal = getTotalExpenses(props.expenses);
  const formattedTotal = numeral(expensesTotal / 100).format('$0,0.00');
  const expenseWord = numberOfExpenses === 1 ? 'expense' : 'expenses';
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Viewing <span>{numberOfExpenses}</span> {expenseWord} totalling <span>{formattedTotal}</span> </h1>
        <div className="page-header__actions">
          <Link className="button" to='/create'>Add Expense</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  expenses: getVisibleExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpensesSummary);