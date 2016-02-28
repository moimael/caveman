import React from 'react';
import Radium from 'radium';

@Radium
class Button extends React.Component {

  static propTypes = {
    block: React.PropTypes.bool,
    children: React.PropTypes.string,
    onClick: React.PropTypes.func,
  }

  render() {
    const styles = {
      base: {
        backgroundColor: '#1C2026',
        border: '2px solid #7A7C80',
        color: '#E3ECD4',
        outline: 'none',
        padding: '1em',
        position: 'relative',
        transform: 'matrix(1, 0, 0, 1, 0, 0)',
        opacity: 1,

        ':hover': {
          color: '#152334',
          outline: 'none',
        },

        ':active': {
          border: '2px solid #D8D8D9',
          color: '#E3ECD4',
          outline: 'none',
        },

        ':focus': {
          color: '#E3ECD4',
          outline: 'none',
        },
      },
      pseudoElement: {
        backgroundColor: '#FFFFFF',
        content: '""',
        height: '100%',
        left: 0,
        position: 'absolute',
        top: 0,
        transformOrigin: 'center bottom',
        transform: 'scaleY(0) translateZ(0)',
        transition: 'transform 400ms cubic-bezier(0.345, 0.005, 0.07, 1)',
        width: '100%',
        zIndex: '-1',
      },
      pseudoElementHover: {
        transform: 'scaleY(1) translateZ(0)',
      },
      block: {
        display: 'block',
        width: '100%',
      },
    };

    const pseudoStyle = Radium.getState(this.state, 'mainBtn', ':hover') &&
      !Radium.getState(this.state, 'mainBtn', ':focus') ? styles.pseudoElementHover : null;
    return (
        <button
          key="mainBtn"
          onClick={this.props.onClick}
          style={[styles.base, this.props.block && styles.block]}
        >
          <div key="before" style={[styles.pseudoElement, pseudoStyle]} />

        {this.props.children}
       </button>
    );
  }
}

export default Button;
