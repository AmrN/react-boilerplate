import authReducer from '../../reducers/auth';

test('should set uid on login', () => {
  const uid = 123;
  const result = authReducer({}, {
    type: 'LOGIN',
    uid,
  });
  expect(result).toEqual({ uid });
});

test('should clear uid on logout', () => {
  const result = authReducer({
    uid: 123,
  }, {
    type: 'LOGOUT',
  });
  expect(result).toEqual({});
});

