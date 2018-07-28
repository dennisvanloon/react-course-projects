import {createStore, combineReducers} from 'redux';

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