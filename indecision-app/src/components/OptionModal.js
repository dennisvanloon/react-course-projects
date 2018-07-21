import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleClearSelectedOption}
        contentLabel="Selected Option">
        <h3>Some Text</h3>
        {props.selectedOption &&     <p>{props.selectedOption}</p>}
        <button onClick={props.handleClearSelectedOption}>Okay!</button>
    </Modal>
)

export default OptionModal;
