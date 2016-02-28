import React from 'react';
import Button from './components/Button.jsx';
import Dropdown from './components/Dropdown.jsx';

export default class App extends React.Component {

  state = {
    optionItems: [
      'My brand portfolio',
      'Best profile match',
      'Highest earnings',
      'Date added',
    ],
  }

  render() {
    const appStyle = {
      backgroundColor: '#15191F',
      height: '100%',
      padding: '2rem',
    };

    return (<div style={appStyle}>
      <div>
        <Button>VIEW BRAND</Button>
      </div>
      <br />
      <div>
        <Dropdown items={this.state.optionItems} />
      </div>
      <br />
      <div>
        <Button block>VIEW BRAND</Button>
      </div>
    </div>);
  }
}
