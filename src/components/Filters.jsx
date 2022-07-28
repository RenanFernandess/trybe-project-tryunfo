import React, { Component } from 'react';
import propTypes from 'prop-types';

class Filters extends Component {
  render() {
    const { nameFilter, rareFilter, onInputChange } = this.props;
    return (
      <div>
        <div>
          <input
            type="text"
            name="nameFilter"
            value={ nameFilter }
            onInput={ onInputChange }
            data-testid="name-filter"
          />
        </div>
        <div>
          <select
            name="rareFilter"
            value={ rareFilter }
            onInput={ onInputChange }
            data-testid="rare-filter"
          >
            <option value="todas">Todas</option>
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </div>
      </div>
    );
  }
}

Filters.propTypes = {
  nameFilter: propTypes.string.isRequired,
  rareFilter: propTypes.string.isRequired,
  onInputChange: propTypes.func.isRequired,
};

export default Filters;
