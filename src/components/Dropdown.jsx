import React from 'react';
import Radium from 'radium';

@Radium
class Dropdown extends React.Component {

  static propTypes = {
    items: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
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
        cursor: 'pointer',
        zIndex: 800,
      },

      dropdownAfter: {

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
        borderBottom: 0,
      },

      active: {
        borderTop: 0,
        opacity: 1,
      },
    };

    const options = this.props.items.map((item, index) => {
      return <li key={index} style={styles.optionItem} value={index}>{item}</li>;
    });
    const activeStyle = this.state.isActive ? styles.active : null;
    const wrapperActiveStyle = this.state.isActive ? styles.wrapperActive : null;

    return (

    <div style={[styles.dropdownWrapper, wrapperActiveStyle]} onClick={this.handleClick}>
      <span>Sort by</span>
      <ul style={[styles.dropdown, activeStyle]}>
        {options}
      </ul>
      <span style={styles.dropdownAfter}></span>
    </div>
    );
  }
}
export default Dropdown;
