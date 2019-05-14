import React from 'react';
import validator from 'validator';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';
import Counter from './Counter';
import VisibilityToggle from './VisibilityToggle';
import square, {cube, add} from '../utils/utils';
import isSeniorCitizen, {isAdult, canDrink} from '../utils/person';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
  
  name = "IndecisionApp";
  version = "1.0.0";
  state = {
    title: "Indecision App",
    subtitle: "We will help you make right decisions.",
    options: this.props.options,
    selectedOption: ''
  };
  
  componentDidMount() {
    try {
      if (localStorage.getItem('options')) {
        this.setState((prevState) => {
          return {
            options: JSON.parse(localStorage.getItem('options'))
          }
        });
      }
    } catch (e) {
      console.log('JSON parsing error');
    }
  }

  componentDidUpdate(prevProps, prevState) {
    localStorage.setItem('options', JSON.stringify(this.state.options));
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  
  emptyOptions = () => {
    this.setState((currentState) => {
      return {
        options: []
      }
    });
  }

  removeOptionHandler = (option) => {
    this.setState((currentState) => {
      let newOptions = currentState.options;
      const index = currentState.options.indexOf(option);
      newOptions.splice(index, 1);
      return {
        options: currentState.options.filter((thisOption) => thisOption !== option)
      }
    });
  }

  addOptionHandler = (option) => {
    if (!option) {
      return 'Option can not be empty.'
    } else if (this.state.options.indexOf(option) >= 0) {
      return 'This option is already present. Please enter a new option.'
    }
    this.setState((currentState) => {
      return {
        options: currentState.options.concat(option)
      }
    });
  }

  showSelectedOption = () => {
    this.setState((currentState) => {
      return {
        selectedOption: currentState.options[Math.floor(Math.random() * currentState.options.length)]
      }
    });
  }

  clearSelectedOption = () => {
    this.setState((currentState) => {
      return {
        selectedOption: undefined  
      }
    });
  }

  render() {
    return (
        <div>
          <Header title={this.state.title} subtitle={this.state.subtitle}/>
          <div className="container">
            <Action hasOptions={this.state.options.length > 0} actionHandler={this.showSelectedOption}/>
            <div className="widget">
              <Options options={this.state.options} removeAllHandler={this.emptyOptions} removeOptionHandler={this.removeOptionHandler}/>
              <AddOption addOptionHandler={this.addOptionHandler}/>
              <Counter/>
              <VisibilityToggle/>
              <p>Cube of 4: {cube(4)}</p>
              <p>Sum of 23 and 27: {add(23, 27)}</p>
              <p>Square of 5: {square(5)}</p>
              <p>15 year old is Adult: {isAdult(15) ? 'Yes' : 'No'}</p>
              <p>21 year old can drink: {canDrink(21) ? 'Yes' : 'No'}</p>
              <p>66 year old is senior citizen: {isSeniorCitizen(66) ? 'Yes' : 'No'}</p>
              <p>'bltaah@x.co' is valid email: {validator.isEmail('bltaah@x.co') ? 'Yes' : 'No'}</p>
              <p>{this.name} {this.version}</p>
            </div>
          </div>
          <OptionModal selectedOption={this.state.selectedOption} clearSelectedOption={this.clearSelectedOption}>
            <h3>Selected Option</h3>
            <h4>{this.state.selectedOption}</h4>
            <button className="button" onClick={this.clearSelectedOption}>Okay</button>
          </OptionModal>
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
}

export default IndecisionApp;