jest.unmock('../components/Dropdown.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Dropdown from '../components/Dropdown.jsx';

describe('Dropdown', () => {

  it('shows options after click', () => {
    // Render a checkbox with label in the document
    const optionItems = [
      'optionTest1',
      'optionTest2',
      'optionTest3',
    ];
    const dropdown = TestUtils.renderIntoDocument(
      <Dropdown optionitems={optionItems} />
    );

    const checkboxNode = ReactDOM.findDOMNode(dropdown);

    // Verify that it's Off by default
    expect(checkboxNode.style.opacity).toEqual('0');

    // Simulate a click and verify that it is now On
    TestUtils.Simulate.change(
      TestUtils.findRenderedDOMComponentWithTag(dropdown, 'div')
    );
    expect(checkboxNode.style.opacity).toEqual('1');
  });
});
