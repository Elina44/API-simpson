import './App.css';
import React from 'react';
import QuoteCard from './Component/QuoteCard';
import axios from 'axios';


function App() {
  const [citation, setCitation] = React.useState({
    "quote": "I don't want to sound like a killjoy, but becuase this is not to my taste I don't think anyone else should be allowed to enjoy it.",
    "character": "Marge Simpson",
    "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMargeSimpson.png?1497567512205",
    "characterDirection": "Right"
    });
  const aleatoireCitation = () => {
    // Send the request
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        setCitation(data[0]);
      });
    };
  

  return (
    <div>
      <button onClick={aleatoireCitation}>
        Citation aléatoire : 
      </button>
        <QuoteCard citation={citation}/>
    </div>
  );
}

export default App;