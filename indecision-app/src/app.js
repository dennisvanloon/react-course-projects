class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecision</h1>
                <h2>Put your life in the hands of a computer</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
          <div>
              <button>What should I do?</button>
          </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>Options Component Here</div>
        );
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>Add Option</div>
        );
    }
}


const jsx = (
    <div>
        <Header/>
        <Action/>
        <Options/>
        <AddOption/>
    </div>
);

ReactDOM.render(jsx, document.getElementById('app'));