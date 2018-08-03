import { setTextFilter, setEndDate, setStartDate, sortByAmount, sortByDate } from "../../actions/filters";
import moment from 'moment';

test('Should generate set startdate action object', () => {
    const thisMoment = moment.now();
    const action = setStartDate(thisMoment);
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: thisMoment
    });
});

test('Should generate set enddate action object', () => {
    const thisMoment = moment.now();
    const action = setEndDate(thisMoment);
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: thisMoment
    });
});

test('Should generate set text filter action object with argument', () => {
    const text ='filtervalue';
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    });
});

test('Should generate set text filter action object without argument', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('Should generate sort by date action object', () => {
    expect(sortByDate()).toEqual({
        type: 'SORT_BY_DATE'
    });
});

test('Should generate sort by amount action object', () => {
    expect(sortByAmount()).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});
