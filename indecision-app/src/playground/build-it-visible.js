class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleVisibilityToggle = this.handleVisibilityToggle.bind(this);
        this.state = {
            visbility: false
        }
    }

    handleVisibilityToggle() {
        this.setState((previousState) => {
            return {
                visbility: !previousState.visbility
            };
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
            <button onClick={this.handleVisibilityToggle}>
                {this.state.visbility ? 'Hide details' : 'Show details'}
            </button>
            {this.state.visbility && (
                <div>
                    <p>These are the details of the app</p>
                </div>
            )}

            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'));
