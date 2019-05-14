import React from 'react';

class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true
        };
    }

    toggleVisible = () => {
        this.setState((currentState) => {
            return {
                visible: !currentState.visible
            };
        });
    }

    render() {
        return (
            <div>
                <button className="button" onClick={this.toggleVisible}>{this.state.visible ? 'Turn Off' : 'Turn On'}</button>
                {' '}
                {this.state.visible ? 'Lights are on' : 'Lights are off'}
            </div>
        );
    }
}

export default VisibilityToggle;