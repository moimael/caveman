import React from 'react';
import Radium from 'radium';

@Radium
class Button extends React.Component {

  static propTypes = {
    block: React.PropTypes.bool,
    children: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    onClick: React.PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.handleActive = this.handleActive.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleHover = this.handleHover.bind(this);
  }

  state = {
    isActive: false,
    isHovered: false,
    isDisabled: this.props.disabled,
  }

  handleActive() {
    this.setState({
      isActive: !this.state.isActive,
    });
  }

  handleClick() {
    this.props.onClick && this.props.onClick();
  }

  handleHover(event) {
    this.setState({
      isHovered: (event.type === 'mouseenter') && !this.props.disabled,
    });
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

        ':focus': {
          color: '#E3ECD4',
          outline: 'none',
        },
      },

      baseActive: {
        border: '2px solid #D8D8D9',
        color: '#E3ECD4',
        outline: 'none',
      },

      baseHover: {
        color: '#152334',
        outline: 'none',
      },
      disabled: {
        color: '#7A7C80',
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

    const pseudoHoverStyle = this.state.isHovered &&
      !Radium.getState(this.state, 'mainBtn', ':focus') ? styles.pseudoElementHover : null;
    const btnHoverStyle = this.state.isHovered && styles.baseHover;
    const btnActiveStyle = this.state.isActive && styles.baseActive;
    const btnDisabledStyle = this.state.isDisabled && styles.disabled;
    const btnBlockStyle = this.props.block && styles.block;

    return (
        <button
          key="mainBtn"
          onClick={this.handleClick}
          onMouseDown={this.handleActive}
          onMouseUp={this.handleActive}
          onMouseEnter={this.handleHover}
          onMouseLeave={this.handleHover}
          disabled={this.state.isDisabled}
          style={[styles.base, btnBlockStyle, btnDisabledStyle, btnHoverStyle, btnActiveStyle]}
        >
          <div key="before" style={[styles.pseudoElement, pseudoHoverStyle]} />

        {this.props.children}
       </button>
    );
  }
}

export default Button;
