import React, { Component } from 'react';
import propTypes from 'prop-types';

class ButtonRemove extends Component {
  render() {
    const { cardName, onRemoveButtonClick } = this.props;
    return (
      <div>
        <button
          type="button"
          name={ cardName }
          onClick={ onRemoveButtonClick }
          data-testid="delete-button"
        >
          Excluir
        </button>
      </div>
    );
  }
}

ButtonRemove.propTypes = {
  cardName: propTypes.string.isRequired,
  onRemoveButtonClick: propTypes.func.isRequired,
};

export default ButtonRemove;
