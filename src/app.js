import React from 'react';
import Button from './components/Button.jsx';
import Dropdown from './components/Dropdown.jsx';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleOptionClick = this.handleOptionClick.bind(this);
  }

  state = {
    optionItems: [
      'My brand portfolio',
      'Best profile match',
      'Highest earnings',
      'Date added',
    ],
  }

  handleClick() {
    console.log("button clicked !");
  }

  handleOptionClick(value, text) {
    console.log(value, text);
  }

  render() {
    const appStyle = {
      backgroundColor: '#15191F',
      height: '100%',
      padding: '2rem',
    };

    return (<div style={appStyle}>
      <div>
        <Button onClick={this.handleClick}>VIEW BRAND</Button>
      </div>
      <br />
      <div>
        <Dropdown optionItems={this.state.optionItems} onOptionItemClick={this.handleOptionClick} />
      </div>
      <br />
      <div>
        <Button block>VIEW BRAND</Button>
      </div>
    </div>);
  }
}
