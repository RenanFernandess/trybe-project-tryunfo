import React, { Component } from 'react';
import './Form.css';
import propTypes from 'prop-types';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form>
        <h2>Adicionar Nova Carta</h2>
        <div>
          <p>Nome</p>
          <input
            type="text"
            name="cardName"
            required
            maxLength="20"
            value={ cardName }
            onInput={ onInputChange }
            id="card-name"
            data-testid="name-input"
          />
        </div>
        <div>
          <p>Descrição</p>
          <textarea
            name="cardDescription"
            id="card-description"
            cols="30"
            rows="10"
            required
            value={ cardDescription }
            onInput={ onInputChange }
            data-testid="description-input"
          />
        </div>
        <div>
          <label htmlFor="cardAttr1">
            <strong>Podersinho</strong>
            <input
              type="number"
              name="cardAttr1"
              required
              value={ cardAttr1 }
              onInput={ onInputChange }
              id="cardAttr1"
              data-testid="attr1-input"
            />
          </label>
          <label htmlFor="cardAttr2">
            <strong>Força</strong>
            <input
              type="number"
              name="cardAttr2"
              required
              value={ cardAttr2 }
              onInput={ onInputChange }
              id="cardAttr2"
              data-testid="attr2-input"
            />
          </label>
          <label htmlFor="cardAttr3">
            <strong>Velocidade</strong>
            <input
              type="number"
              name="cardAttr3"
              required
              value={ cardAttr3 }
              onInput={ onInputChange }
              id="cardAttr3"
              data-testid="attr3-input"
            />
          </label>
        </div>
        <div>
          <p>Imagem</p>
          <input
            type="text"
            name="cardImage"
            required
            data-testid="image-input"
            value={ cardImage }
            onInput={ onInputChange }
            id="image-input"
          />
        </div>
        <div>
          <label htmlFor="select-rare">
            <strong>Raridade</strong>
            <select
              name="cardRare"
              required
              id="select-rare"
              data-testid="rare-input"
              value={ cardRare }
              onInput={ onInputChange }
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="trunfo-input">
            <strong>Super trybe trunfo</strong>
            <input
              type="checkbox"
              name="cardTrunfo"
              data-testid="trunfo-input"
              disabled={ hasTrunfo }
              checked={ cardTrunfo }
              onChange={ onInputChange }
              id="trunfo-input"
            />
          </label>
        </div>
        <div>
          <button
            type="button"
            disabled={ isSaveButtonDisabled }
            data-testid="save-button"
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: propTypes.string.isRequired,
  cardDescription: propTypes.string.isRequired,
  cardAttr1: propTypes.string.isRequired,
  cardAttr2: propTypes.string.isRequired,
  cardAttr3: propTypes.string.isRequired,
  cardImage: propTypes.string.isRequired,
  cardRare: propTypes.string.isRequired,
  cardTrunfo: propTypes.bool.isRequired,
  hasTrunfo: propTypes.bool.isRequired,
  isSaveButtonDisabled: propTypes.bool.isRequired,
  onInputChange: propTypes.func.isRequired,
  onSaveButtonClick: propTypes.func.isRequired,
};

export default Form;
