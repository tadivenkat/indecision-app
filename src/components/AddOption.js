import React from 'react';

class AddOption extends React.Component {
    state = {
        error: ''
    }

    addOption = (event) => {
        event.preventDefault();
        const option = event.target.elements.option.value;
        const error = this.props.addOptionHandler(option);
        this.setState((currentState) => {
            return { error }
        });
        if (!error) {
            event.target.elements.option.value = "";
        }
    }
    
    render() {
        return (
            <div>
                {this.state.error && <p className="widget__message">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.addOption}>
                    <input className="add-option__input" type="text" name="option" placeholder="Enter Your Option"/>
                    <button className="button">Add Option</button>
                </form>
            </div>
        );
    }
}

export default AddOption;