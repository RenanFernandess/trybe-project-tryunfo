import React, { Component } from 'react';
import propTypes from 'prop-types';

class AtrributeInput extends Component {
  render() {
    const { atrributeName, name } = this.props;
    return (
      <label htmlFor={ name }>
        { atrributeName }
        <input type="number" name={ name } id={ name } />
      </label>
    );
  }
}

AtrributeInput.propTypes = {
  atrributeName: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
};

export default AtrributeInput;
