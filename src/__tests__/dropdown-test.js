jest.unmock('../components/Dropdown.jsx');

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Dropdown from '../components/Dropdown.jsx';

describe('Dropdown', () => {

  it('shows options after click', () => {
    const optionItems = [
      'optionTest1',
      'optionTest2',
      'optionTest3',
    ];

    const renderer = TestUtils.createRenderer();
    renderer.render(<Dropdown optionItems={optionItems} />);
    let result = renderer.getRenderOutput();

    let ul = result.props.children[1];

    // Verify that it's Off by default
    // expect(result.getMountedInstance().state.isActive).toEqual(true);
    expect(ul.props.style[0].opacity).toEqual(0);

    result.props.onClick({ preventDefault: () => {} });

    result = renderer.getRenderOutput();
    ul = result.props.children[1];

    expect(ul.props.style[1].opacity).toEqual(1);
  });
});
