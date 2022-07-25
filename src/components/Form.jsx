import React, { Component } from 'react';
import './Form.css';
import AtrributeInput from './AtrributeInput';

class Form extends Component {
  render() {
    return (
      <form action="">
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
          <AtrributeInput
            atrributeName="Podersinho"
            name="attr1"
            data-testid="attr1-input"
          />
          <AtrributeInput
            atrributeName="Força"
            name="attr2"
            data-testid="attr2-input"
          />
          <AtrributeInput
            atrributeName="Velocidade"
            name="attr3"
            data-testid="attr3-input"
          />
        </div>
        <div>
          <p>Imagem</p>
          <input
            type="text"
            name="image-input"
            data-testid="image-input"
            id="image-input"
          />
        </div>
        <div>
          <select name="" id="" data-testid="rare-input">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito-raro">Muito raro</option>
          </select>
        </div>
      </form>
    );
  }
}
// data-testid="trunfo-input"

export default Form;
