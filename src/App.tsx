import "./App.css";
import { BingoCard } from "./components/BingoCard";

const possibleNumbers: number[] = [];

for(let i = 1; i <= 75; i++) {
  possibleNumbers.push(i);
}

const generateNumbers = () => {
  const numbers = [...possibleNumbers];
  const result = [];

  for(let i = 0; i < 25; i++) {
    const randomIndex = Math.floor(Math.random() * numbers.length);
    result.push(numbers[randomIndex]);
    numbers.splice(randomIndex, 1)
  }
  return result;
}

const getCards = (numberOfCards: number) => {
  const cards = [];
  for(let i = 0; i < numberOfCards; i++) {
    cards.push(<BingoCard numbers={generateNumbers()} title={'Bingo!'} />)
  }
  return cards;
}

function App() {
  return (
    <div className="cardsContainer">
      { getCards(200) }
    </div>
  );
}

export default App;
