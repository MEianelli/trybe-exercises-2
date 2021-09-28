import React from 'react';

class Buttons extends React.Component {
  render() {
    const { type, handleTypeClick } = this.props;
    return (
      <button type="button" onClick={ handleTypeClick } >{ type }</button>
    );
  }
}

export default Buttons;