import { login, logout, startLogin, startLogout } from '../auth';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expenses from '../../fixtures/expenses.fixture';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

test('sould login with correct uid', () => {
  const action = login('123abc');
  expect(action).toEqual({
    type: 'LOGIN',
    uid: '123abc'
  });
});

test('sould logout works correctly', () => {
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT'
  });
});