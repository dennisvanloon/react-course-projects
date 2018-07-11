console.log('Indecision app js running');

const app = {
    title: 'This is the indecision app',
    subtitle: 'I hope you like it',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderIndecisionApp();
    }
};
const onRemoveAll = () => {
    app.options = [];
    renderIndecisionApp();
};

const approot = document.getElementById('app');

const renderIndecisionApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{(app.options && app.options.length > 0) ? 'Here are your options' : 'No options'}</p>
            <p>{app.options.length}</p>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                {
                    app.options.map((option) => {
                        return <li key={option}>{option}</li>;
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Button</button>
            </form>
        </div>
    );
    ReactDOM.render(template, approot);
};

renderIndecisionApp();

