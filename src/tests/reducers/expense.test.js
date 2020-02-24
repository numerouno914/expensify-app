import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '44'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const expense = {
    description: 'new expense',
    note: "",
    amount: '40560',
    createdAt: moment(),
    id: '4'
  }
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, action.expense]);
});

test('should edit expense if id is valid', () => {
  const updates = {
    id: expenses[2].id,
    description: 'House Rent',
    amount: 2050,
    createdAt: moment(0),
    note: ''
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[2].id,
    updates
  }
  const state = expensesReducer(expenses, action);
  expect(state[2]).toEqual(action.updates);
});

test('should not edit expense for id not found', () => {
  const updates = {
    id: expenses[1].id,
    description: 'House Rent',
    amount: 2050,
    createdAt: moment(0),
    note: ''
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-6',
    updates
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: [expenses[0]]
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0]])
});