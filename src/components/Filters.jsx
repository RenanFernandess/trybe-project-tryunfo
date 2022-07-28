import React, { Component } from 'react';
import propTypes from 'prop-types';

class Filters extends Component {
  render() {
    const { nameFilter, rareFilter, trunfoFilter, onInputChange } = this.props;
    return (
      <div>
        <div>
          <input
            type="text"
            name="nameFilter"
            value={ nameFilter }
            onInput={ onInputChange }
            disabled={ trunfoFilter }
            data-testid="name-filter"
          />
        </div>
        <div>
          <select
            name="rareFilter"
            value={ rareFilter }
            onInput={ onInputChange }
            disabled={ trunfoFilter }
            data-testid="rare-filter"
          >
            <option value="todas">Todas</option>
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </div>
        <div>
          <label htmlFor="trunfo-filter">
            <input
              type="checkbox"
              name="trunfoFilter"
              checked={ trunfoFilter }
              value={ trunfoFilter }
              onChange={ onInputChange }
              data-testid="trunfo-filter"
            />
            <strong> Super Trunfo</strong>
          </label>
        </div>
      </div>
    );
  }
}

Filters.propTypes = {
  nameFilter: propTypes.string.isRequired,
  rareFilter: propTypes.string.isRequired,
  trunfoFilter: propTypes.bool.isRequired,
  onInputChange: propTypes.func.isRequired,
};

export default Filters;
