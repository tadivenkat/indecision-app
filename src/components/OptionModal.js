import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        className="modal" 
        isOpen={!!props.selectedOption}
        onRequestClose={props.clearSelectedOption}
        contentLabel="Selected Option">
            {props.children}
    </Modal>
);


export default OptionModal;