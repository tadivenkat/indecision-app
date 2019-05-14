import React from 'react';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <IndecisionApp />
      </div>
    );
  }
}