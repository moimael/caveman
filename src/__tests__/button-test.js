jest.unmock('../components/Button.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Button from '../components/Button.jsx';

describe('Button', () => {

  it('display correct text', () => {
    // Render a checkbox with label in the document
    const button = TestUtils.renderIntoDocument(
      <Button>VIEW BRAND</Button>
    );

    const buttonNode = ReactDOM.findDOMNode(button);

    // Verify that it's Off by default
    expect(buttonNode.textContent).toEqual('VIEW BRAND');
  });

  it('display as block element', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<Button block>VIEW BRAND</Button>);
    const result = renderer.getRenderOutput();

    expect(result.props.style[1].display).toEqual('block');
    expect(result.props.style[1].width).toEqual('100%');
  });
});
