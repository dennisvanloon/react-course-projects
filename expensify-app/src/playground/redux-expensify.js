import {createStore, combineReducers} from 'redux';

// ADD EXPENSE
// REMOVE EXPENSE
// EDIT EXPENSE
// SET TEXT FILTER
// SORT BY DATE
// SORT BY AMOUNT
// SET START DATE
// SET END DATE


// Expenses Reducer
const expensesReducerDefaultState = [];
const expensesReducer  = ( state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

// Filter Reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};
const filterReducer  = ( state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

// Store creation
const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filterReducer
}));

console.log(store.getState());

const demoState = {
    expenses: [{
        id: 'xxdcdccdc',
        description:  'January Rent',
        note: 'csdcdcs',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // amont or date
        startDate: undefined,
        endDate: undefined
    }
};