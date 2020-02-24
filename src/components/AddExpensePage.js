import React from 'react';
import { connect } from 'react-redux';
import { startAddExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    //props.dispatch(addExpense(expense));
    this.props.startAddExpense(expense);
    this.props.history.push('/');
  }
  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
};

// same as above except using functional component
// const AddExpensePage = (props) => {
//   const onSubmit = (expense) => {
//     //props.dispatch(addExpense(expense));
//     props.addExpense(expense);
//     props.history.push('/');
//   }
//   return (
//     <div>
//       <h1>Add Expense</h1>
//       <ExpenseForm
//         onSubmit={onSubmit}
//       />
//     </div>
//   );
// }

const mapDispatchToProps = (dispatch) => (
  {
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
  }
)

export default connect(undefined, mapDispatchToProps)(AddExpensePage);