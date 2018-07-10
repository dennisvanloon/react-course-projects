console.log('Indecision app js running');

var app = {
  title: 'This is the indecision app',
  subtitle: 'I hope you like it',
  options: ['One', 'Two']
};

var template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{(app.options && app.options.length > 0) ? 'Here are your options' : 'No options'}</p>
    <ol>
      <li>Item One</li>
      <li>Item Two</li>
    </ol>
  </div>
);

var approot = document.getElementById('app');

ReactDOM.render(template, approot);
