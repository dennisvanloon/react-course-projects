console.log('Indecision app js running');

const app = {
  title: 'This is the indecision app',
  subtitle: 'I hope you like it',
  options: ['One', 'Two']
};

const template = (
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

const approot = document.getElementById('app');

ReactDOM.render(template, approot);
