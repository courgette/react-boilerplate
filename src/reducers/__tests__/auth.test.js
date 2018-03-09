import authReducer from '../auth';

test('should login with uid', () => {
  const uid = '123_ABC';
  const action = {
    type: 'LOGIN',
    uid
  };

  const state = authReducer({}, action);
  expect(state).toEqual({uid});
});

test('should logout', () => {
  const action = {
    type: 'LOGOUT'
  };

  const state = authReducer({uid: '123_ABC'}, action);
  expect(state).toEqual({});
});
