import React, { Component } from 'react';
import propTypes from 'prop-types';

class Filters extends Component {
  render() {
    const { nameFilter, onInputChange } = this.props;
    return (
      <div>
        <input
          type="text"
          name="nameFilter"
          value={ nameFilter }
          onInput={ onInputChange }
          data-testid="name-filter"
        />
      </div>
    );
  }
}

Filters.propTypes = {
  nameFilter: propTypes.string.isRequired,
  onInputChange: propTypes.func.isRequired,
};

export default Filters;
