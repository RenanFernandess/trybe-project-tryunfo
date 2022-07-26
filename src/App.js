import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);

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
    };
  }

  onInputChange({ target: { type, name, value, checked } }) {
    this.setState({ [name]: (type === 'checkbox') ? checked : value }, () => {
      const {
        cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage, cardRare,
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
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <main>
          <section id="create-card">
            <section id="Form-Container">
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
            <section id="preview">
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
          </section>
        </main>
      </div>
    );
  }
}

export default App;
