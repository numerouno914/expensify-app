import { startAddExpense, addExpense, removeExpense, editExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk'; 
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

test('should set up remove expense action object', () => {
  const action = removeExpense({ id: '1234abc'});
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '1234abc'
  });
});

test('should set up edit expense action object',() => {
  const action = editExpense('123abc', {amount: 50.45, note: 'my edited note'});
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      note: 'my edited note',
      amount: 50.45
    }
  });
});

test('should set up add expense action generator with provided values', () => {
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  })
});

test('should add expense to database and store', (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: "Mouse",
    amount:3000,
    note: "This one is better",
    createdAt: 1000
  }
  // to check if dispatching startAddExpense dispatches the correct action
  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });
    //fetch data from firebase to test/see if data was saved at correct location
   return database.ref(`expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData);
    done();
  });
});

test('should add expense with defaults to database and store', () => {
  const store = createMockStore({});
  const expenseDefaults = {
    description: "",
    amount:0,
    note: "",
    createdAt: 0
  }
  // to check if dispatching startAddExpense dispatches the correct action
  store.dispatch(startAddExpense({})).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseDefaults
      }
    });
    //fetch data from firebase to test/see if data was saved at correct location
   return database.ref(`expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseDefaults);
    done();
  });
});

// test('should set up add expense action generator with default values', () => {
//   const action = addExpense();
//   expect(action).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: {
//       description: '',
//       note: '',
//       amount: 0,
//       createdAt: 0,
//       id: expect.any(String)
//     }
//   });
// });