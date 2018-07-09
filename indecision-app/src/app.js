console.log('Indecision app js running');

var template = (
  <div>
    <h1>Welcome again to the Indecision App</h1>
    <p>This is some info</p>
    <ol>
      <li>Item One</li>
      <li>Item Two</li>
    </ol>
  </div>
);

var approot = document.getElementById('app');

ReactDOM.render(template, approot);
