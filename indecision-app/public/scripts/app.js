console.log('Indecision app js running');

// var template = <p>Welcome to the Indecision App</p>;
var template = React.createElement(
  "p",
  {id : "someid"},
  "Welcome to the Indecision App"
);
var approot = document.getElementById('app');

ReactDOM.render(template, approot);
