import React from 'react';
import AddOption from './AddOption.js';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModel from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = {
        options : [],
        selectedOption: undefined
    }

    handleClearSelectedOption = () => {
        this.setState(() => ( {selectedOption: undefined} ));
    }

    handleDeleteOptions = () => {
        this.setState(() => ( {options: []} ));
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((previousState) => ({
            options: previousState.options.filter((option) => optionToRemove !== option)
        }));
    }

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ( {selectedOption: option}));
    }

    handleAddOption = (option) => {
        if (!option) {
            return 'Invalid value for option';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }
        this.setState((previousState) => ( {options: previousState.options.concat(option)} ));
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({options}));
            }

        } catch (e) {

        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length != this.state.options.length) {
            console.log('Component Did Update')
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount() {
        console.log('Component Will Unmount')
    }

    render() {
        const subtitle ='Put your life in the hands of a computer';

        return (
            <div>
                <Header subtitle={subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick = {this.handlePick} />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption} />
                <AddOption
                    handleAddOption={this.handleAddOption} />
                <OptionModel
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
};
