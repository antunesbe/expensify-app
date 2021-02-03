import auth from '../../reducers/auth';
import authReducers from '../../reducers/auth';

test('should set default state',()=>{
    const state = authReducers(undefined, {type: '@@INIT'});
    expect(state).toEqual({});
});

test('should return uid with user is logged in', () => {
    const uid = '123';
    const state = authReducers({}, {type: 'LOGIN', uid})
    expect(state).toEqual({uid});
});

test('should return empty object with user is logged out', () => {
    const state = authReducers({}, {type: 'LOGOUT'})
    expect(state).toEqual({});
});