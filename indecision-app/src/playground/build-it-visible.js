const approot = document.getElementById('app');

let visible = false;

const onToggle = () => {
    visible = !visible;
    renderVisibilityToggleApp();
}

const renderVisibilityToggleApp = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={onToggle}>
                {visible ? 'Hide details' : 'Show details'}
            </button>
            {visible && (
                <div>
                    <p>These are the details of the app</p>
                </div>
            )}

        </div>
    );
    ReactDOM.render(template, approot);
};

renderVisibilityToggleApp();
