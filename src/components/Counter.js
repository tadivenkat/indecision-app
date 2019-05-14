import React from 'react';

class Counter extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            count: props.count
        };
    }

    componentDidMount() {
        try {
            if (localStorage.getItem('count')) {
                this.setState((currentState) => {
                    return {
                        count: parseInt(localStorage.getItem('count'))
                    }
                });
            }
        } catch (e) {
            console.log(e);
        }
    }

    componentDidUpdate(prevProp, prevState) {
        localStorage.setItem('count', this.state.count.toString());
    }
    
    addOne = () => {
        this.setState((presentState) => {
            return {
                count: presentState.count + 1
            }
        });
    }
    
    subtractOne = () => {
        this.setState((presentState) => {
            return {
                count: presentState.count - 1
            }
        });
    }
    
    reset = () => {
        this.setState((presentState) => {
            return {
                count: this.props.count
            }
        });
    }
    
    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button class="button" onClick={this.addOne}>+</button>{' '}
                <button class="button" onClick={this.subtractOne}>-</button>{' '}
                <button class="button" onClick={this.reset}>Reset</button>
            </div>
        );
    }
}

Counter.defaultProps = {
    count: 0
}

export default Counter;