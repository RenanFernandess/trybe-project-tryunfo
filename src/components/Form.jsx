import React, { Component } from 'react';
import './Form.css';
// import propTypes from 'prop-types';

class Form extends Component {
  render() {
    // const {
    //   cardName,
    //   cardDescription,
    //   cardAttr1,
    //   cardAttr2,
    //   cardAttr3,
    //   cardImage,
    //   cardRare,
    //   cardTrunfo,
    //   hasTrunfo,
    //   isSaveButtonDisabled,
    //   onInputChange,
    //   onSaveButtonClick,
    // } = this.props;

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
            data-testid="description-input"
          />
        </div>
        <div>
          <label htmlFor="cardAttr1">
            <strong>Podersinho</strong>
            <input
              type="number"
              name="cardAttr1"
              id="cardAttr1"
              data-testid="attr1-input"
            />
          </label>
          <label htmlFor="cardAttr2">
            <strong>Força</strong>
            <input
              type="number"
              name="cardAttr2"
              id="cardAttr2"
              data-testid="attr2-input"
            />
          </label>
          <label htmlFor="cardAttr3">
            <strong>Velocidade</strong>
            <input
              type="number"
              name="cardAttr3"
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
            data-testid="image-input"
            id="image-input"
          />
        </div>
        <div>
          <label htmlFor="select-rare">
            <strong>Raridade</strong>
            <select name="cardRare" id="select-rare" data-testid="rare-input">
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
              id="trunfo-input"
            />
          </label>
        </div>
        <div>
          <button type="button" data-testid="save-button">Salvar</button>
        </div>
      </form>
    );
  }
}

// Form.propTypes = {
//   cardName: propTypes.string.isRequired,
//   cardDescription: propTypes.string.isRequired,
//   cardAttr1: propTypes.string.isRequired,
//   cardAttr2: propTypes.string.isRequired,
//   cardAttr3: propTypes.string.isRequired,
//   cardImage: propTypes.string.isRequired,
//   cardRare: propTypes.string.isRequired,
//   cardTrunfo: propTypes.bool.isRequired,
//   hasTrunfo: propTypes.bool.isRequired,
//   isSaveButtonDisabled: propTypes.bool.isRequired,
//   onInputChange: propTypes.func.isRequired,
//   onSaveButtonClick: propTypes.func.isRequired,
// };

export default Form;
