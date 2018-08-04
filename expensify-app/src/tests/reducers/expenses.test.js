import expensesReducer from '../../reducers/expenses';
import moment from "moment/moment";
import expenses from '../fixtures/expenses';

test('Should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT'});
    expect(state).toEqual([]);
});

test('Should remove expense', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '1'
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1], expenses[2]]);
});

test('Should not remove expense when id does not exist', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('Should add an expense', () => {
    const expense = {
        id: '4',
        description: 'New expense',
        note: '',
        amount: 500,
        createdAt: moment.now()
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('Should edit an expense', () => {
    const description = 'Gum modified';
    const updates = {
        description
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates
    }
    const state = expensesReducer(expenses, action);
    expect(state[0].description).toBe(description);
});

test('Should not edit an expense when id does not exist', () => {
    const description = 'Gum modified';
    const updates = {
        description
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});