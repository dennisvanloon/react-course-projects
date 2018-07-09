'use strict';

console.log('Indecision app js running');

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Welcome again to the Indecision App'
  ),
  React.createElement(
    'p',
    null,
    'This is some info'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item One'
    ),
    React.createElement(
      'li',
      null,
      'Item Two'
    )
  )
);

var approot = document.getElementById('app');

ReactDOM.render(template, approot);
