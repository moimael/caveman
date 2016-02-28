import React from 'react';
import Radium from 'radium';

@Radium
class Dropdown extends React.Component {

  static propTypes = {
    optionItems: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    onOptionItemClick: React.PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  state = {
    isActive: false,
  }

  handleClick() {
    this.setState({
      isActive: !this.state.isActive,
    });
  }

  render() {
    const styles = {
      dropdownWrapper: {
        cursor: 'pointer',
        outline: 'none',
        position: 'relative',
        width: '200px',
        padding: '1em 2.5em 1em 1em',
        backgroundColor: '#1C2026',
        borderTop: '2px solid #7A7C80',
        borderBottom: '2px solid #7A7C80',
        borderLeft: '2px solid #7A7C80',
        borderRight: '2px solid #7A7C80',
        color: '#E3ECD4',
      },

      dropdown: {
        position: 'absolute',
        backgroundColor: '#1C2026',
        color: '#E3ECD4',
        borderTop: '2px solid #7A7C80',
        borderBottom: '2px solid #7A7C80',
        borderLeft: '2px solid #7A7C80',
        borderRight: '2px solid #7A7C80',
        transition: 'opacity 0.3s ease-out',
        listStyle: 'none',
        padding: 0,
        opacity: 0,
        left: '-2px',
        right: '-2px',
        cursor: 'default',
        pointerEvents: 'none',
      },

      dropdownAfter: {
        borderStyle: 'solid',
        borderWidth: '0.15em 0.15em 0 0',
        content: '',
        display: 'inline-block',
        height: '0.45em',
        right: '1em',
        position: 'absolute',
        top: 'calc(50% - 0.15em)',
        transform: 'translateY(-50%) rotate(135deg)',
        verticalAlign: 'top',
        width: '0.45em',
      },

      dropdownAfterActive: {
        transform: 'rotate(-45deg)',
      },

      optionItem: {
        margin: 0,
        padding: '1em',

        ':hover': {
          backgroundColor: 'white',
          color: '#1C2330',
        },
      },

      wrapperActive: {
        borderBottom: '2px solid #1C2026',
      },

      active: {
        borderTop: 0,
        cursor: 'pointer',
        opacity: 1,
        pointerEvents: 'auto',
        zIndex: 800,
      },
    };

    const options = this.props.optionItems.map((optionItem, index) => {
      return <li key={index} style={styles.optionItem} value={index}>{optionItem}</li>;
    });
    const activeStyle = this.state.isActive ? styles.active : null;
    const wrapperActiveStyle = this.state.isActive ? styles.wrapperActive : null;
    const dropdownAfterActiveStyle = this.state.isActive ? styles.dropdownAfterActive : null;

    return (

    <div style={[styles.dropdownWrapper, wrapperActiveStyle]}
      onClick={this.handleClick}
      onOptionItemClick={this.props.onOptionItemClick}
    >
      <span>Sort by</span>
      <ul style={[styles.dropdown, activeStyle]}>
        {options}
      </ul>
      <span style={[styles.dropdownAfter, dropdownAfterActiveStyle]}></span>
    </div>
    );
  }
}
export default Dropdown;
