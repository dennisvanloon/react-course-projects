import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss'

const store = configureStore();

store.dispatch(addExpense({description: 'Water bill', amount: 200}));
console.log(store.getState());

store.dispatch(addExpense({description: 'Gas bill', amount: 100}));
console.log(store.getState());

console.log(getVisibleExpenses(store.getState().expenses, store.getState().filters));

store.dispatch(setTextFilter('water'));
console.log(getVisibleExpenses(store.getState().expenses, store.getState().filters));

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>

);

ReactDOM.render(jsx, document.getElementById('app'));