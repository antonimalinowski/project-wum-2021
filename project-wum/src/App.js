import React from 'react';
// import logo from './logo.svg';
import Fiszki from './Data/set1';
import Card from './Card';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      cards: [
        {
            question: 'Wyjaśnij pojęcie niedożywienie, uwzględniając najważniejsze informacje',
            frontimage: '',
            answer: 'Stan wynikający z braku wchłaniania lub braku spożywania substancji żywieniowych, prowadzący do zmiany składu ciała, upośledzenia fizycznej i mentalnej funkcji organizmu oraz wpływający niekorzystnie na wynik leczenia choroby podstawowej',
            backimage: 'https://randomuser.me/api/portraits/men/75.jpg',
        },
        {
            question: 'PRAWDA/ FAŁSZ: Chorym ze znaczną nadwagą lub otyłością najczęściej towarzyszy niedożywienie typu Kwashiorkor.',
            frontimage: '',
            answer: 'PRAWDA',
            backimage: './Images/grafika 18.jpg',
        },
        {
            question: 'Wymień 3 typy niedożywienia',
            frontimage: '',
            answer: 'Niedożywienie typu marasmus (niedożywienie białkowo-kaloryczne), \n Niedożywienie typu kwashiorkor (niedożywienie białkowe), \n Niedożywienie mieszane \n',
            backimage: '',
        },
        {
          question: 'Jaką znasz inną nazwę na niedożywienie typu marasmus?',
          frontimage: '',
          answer: 'Niedożywienie proste',
          backimage: '',
        },
        {
          question: 'Czy osoby niedożywione zawsze są wychudzone?',
          frontimage: '',
          answer: 'NIE',
          backimage: '',
        },
      ],
        currentCard: {}
    };
  }

  state = {
    loading: true,
    person: null
  };

  componentWillMount() {
    const currentCards = this.state.cards;
    
    this.setState({
      cards: currentCards,
      currentCard: this.getRandomCard(currentCards),
    })
  }

  getRandomCard(currentCards) {
    var card = currentCards[Math.floor(Math.random() * currentCards.length)]
    return(card);
  }

  render() {
    return (
      <div className="App">
        <Card
          question={this.state.currentCard.question}
          frontimage={this.state.currentCard.frontimage}
          answer={this.state.currentCard.answer}
          backimage={this.state.currentCard.backimage}/>
      </div>
    );
  }
}

export default App;
