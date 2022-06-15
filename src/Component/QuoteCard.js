import React from 'react';
import './QuoteCard.css';


const QuoteCard = ({ citation }) => (

   citation && (
  <figure className="QuoteCard">
    <img src={citation.image} alt={citation.character} />
    <figcaption>
      <blockquote>{citation.quote}</blockquote>
      <cite>{citation.character}</cite>
    </figcaption>
  </figure>
));

export default QuoteCard;
