import { login, logout } from '../../actions/auth';

test('should set up login action object', () => {
  const action = login('1234abc');
  expect(action).toEqual({
    type: 'LOGIN',
    uid: '1234abc'
  });
});

test('should set up logout action object', () => {
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT'
  });
});