import React from 'react';
import './App.css';
import Form from './components/Form';
import Card from './components/Card';
import ButtonRemove from './components/ButtonRemove';
import Filters from './components/Filters';

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.onRemoveButtonClick = this.onRemoveButtonClick.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cards: [],
      nameFilter: '',
    };
  }

  onInputChange({ target: { type, name, value, checked } }) {
    this.setState({ [name]: (type === 'checkbox') ? checked : value }, () => {
      const {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
      } = this.state;

      const cardStates = [
        cardName, cardDescription, cardImage, cardRare,
      ];
      const cardAtrributes = [
        Number(cardAttr1), Number(cardAttr2), Number(cardAttr3),
      ];
      const [Attr1, Attr2, Attr3] = cardAtrributes;
      const atrributesSum = (Attr1 + Attr2 + Attr3);
      const maxValueAtrr = 90;
      const maxValueSumAtrr = 210;

      this.setState(
        { isSaveButtonDisabled: !cardStates.every((state) => state.length >= 1)
          || !cardAtrributes.every((number) => number >= 0 && number <= maxValueAtrr)
          || (atrributesSum > maxValueSumAtrr),
        },
      );
    });
  }

  onSaveButtonClick() {
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
      cards,
    } = this.state;
    const cardStates = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };
    cards.push(cardStates);
    this.setState({
      cards,
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: (cardTrunfo) ? true : hasTrunfo,
      isSaveButtonDisabled: true,
    });
  }

  onRemoveButtonClick({ target: { name } }) {
    console.log('ok');
    const { cards } = this.state;

    const newCards = cards.filter(({ cardName }) => cardName !== name);
    console.log(newCards);
    this.setState({
      cards: newCards,
      hasTrunfo: newCards.some(({ cardTrunfo: trunfo }) => trunfo),
    });
  }

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
      cards,
      nameFilter,
    } = this.state;

    const filteredCards = cards
      .filter(({ cardName: name }) => name.includes(nameFilter) || !nameFilter);
    return (
      <div>
        <header>
          <h1>Tryunfo</h1>
        </header>
        <main>
          <section className="Form-Container container">
            <Form
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              hasTrunfo={ hasTrunfo }
              isSaveButtonDisabled={ isSaveButtonDisabled }
              onInputChange={ this.onInputChange }
              onSaveButtonClick={ this.onSaveButtonClick }
            />
          </section>
          <section className="preview container">
            <Card
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
            />
          </section>
          <section className="filter container">
            <h2>Filtros de busca</h2>
            <Filters nameFilter={ nameFilter } onInputChange={ this.onInputChange } />
          </section>
          <section className="cards-container container">
            <h2>Todas as cartas</h2>
            <section className="cards">
              { filteredCards.map((item) => {
                const {
                  cardName: name,
                  cardDescription: description,
                  cardAttr1: atrri1,
                  cardAttr2: atrri2,
                  cardAttr3: atrri3,
                  cardImage: image,
                  cardRare: rare,
                  cardTrunfo: trunfo,
                } = item;

                return (
                  <section key={ name }>
                    <Card
                      cardName={ name }
                      cardDescription={ description }
                      cardAttr1={ atrri1 }
                      cardAttr2={ atrri2 }
                      cardAttr3={ atrri3 }
                      cardImage={ image }
                      cardRare={ rare }
                      cardTrunfo={ trunfo }
                    />
                    <ButtonRemove
                      cardName={ name }
                      onRemoveButtonClick={ this.onRemoveButtonClick }
                    />
                  </section>
                );
              }) }
            </section>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
