import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

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
  const expenseData = {
    description: 'rent',
    createdAt: 1000,
    note: 'rent for last month',
    amount: 109500
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  })
});

test('should set up add expense action generator with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '',
      note: '',
      amount: 0,
      createdAt: 0,
      id: expect.any(String)
    }
  });
});