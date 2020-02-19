import authReducer from '../../reducers/auth'
  
test('should set uid for login', () => {
    const action = {
        type: 'LOGIN',
        uid: 'abc123'
    }
    const state = authReducer(undefined, action)
    expect(state).toEqual({uid: 'abc123'})
})

test('should clear uid for logout', () => {
    const action = {
        type: 'LOGOUT'
    }
    let state = {uid: 'bajarbles'}
    state = authReducer(state, action)
    expect(state).toEqual({})
})