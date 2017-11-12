import { login, logout } from '../../actions/auth';

test('should create login action object', () => {
  const uid = 123;
  const result = login(uid);
  expect(result).toEqual({
    type: 'LOGIN',
    uid,
  });
});

test('should create logout action object', () => {
  const result = logout();
  expect(result).toEqual({
    type: 'LOGOUT',
  });
});

