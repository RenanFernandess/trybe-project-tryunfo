import React, { Component } from 'react';
import propTypes from 'prop-types';
import './Card.css';

class Card extends Component {
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
    } = this.props;
    const trunfo = (cardTrunfo) ? <p data-testid="trunfo-card">Super Trunfo</p> : <p />;

    return (
      <section className={ `card ${cardRare}` }>
        <div className="card-Infos">
          <h4 className="card-title" data-testid="name-card">{ cardName }</h4>
          <img src={ cardImage } alt={ cardName } data-testid="image-card" />
          <p
            className="description-card"
            data-testid="description-card"
          >
            {cardDescription}
          </p>
          <div className="power">
            <strong>Podersinho</strong>
            <p data-testid="attr1-card">{cardAttr1}</p>
          </div>
          <div className="force">
            <strong>Força</strong>
            <p data-testid="attr2-card">{cardAttr2}</p>
          </div>
          <div className="life">
            <strong>Vida</strong>
            <p data-testid="attr3-card">{cardAttr3}</p>
          </div>
          <p className="rare-card" data-testid="rare-card">{cardRare}</p>
        </div>
        { trunfo }
      </section>
    );
  }
}

Card.propTypes = {
  cardName: propTypes.string.isRequired,
  cardDescription: propTypes.string.isRequired,
  cardAttr1: propTypes.string.isRequired,
  cardAttr2: propTypes.string.isRequired,
  cardAttr3: propTypes.string.isRequired,
  cardImage: propTypes.string.isRequired,
  cardRare: propTypes.string.isRequired,
  cardTrunfo: propTypes.bool.isRequired,
};

export default Card;
