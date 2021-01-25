import expensesReducers from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state',()=>{
    const state = expensesReducers(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducers(expenses, action);

    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducers(expenses, action);

    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const expense = {
        id: '3',
        description: 'New expense',
        amount: 205,
        createdAt: 0
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducers(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            note: 'editing'
        }
    };
    const state = expensesReducers(expenses, action);
    expect(state[0].note).toBe('editing');
});

test('should not edit an expense if not found by id', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            note: 'editing'
        }
    };
    const state = expensesReducers(expenses, action);
    expect(state).toEqual(expenses);
});