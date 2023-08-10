import { useState, useEffect } from 'react';
import './quote.css';

const Quote = () => {
  const [quotes, setQuotes] = useState([
    {
      author: '',
      quote: '',
      category: '',
    },
  ]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const apiKey = 'XxUR33wxxw1Dzw1vFr9tlA==VEC9QkFF4SoNPP6V';
        const apiUrl = 'https://api.api-ninjas.com/v1/quotes';
        const response = await fetch(apiUrl, {
          headers: {
            'Content-Type': 'application/json',
            'X-Api-Key': apiKey,
          },
        });
        const data = await response.json();
        setQuotes(data[0]);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchQuote();
  }, []);

  if (loading) {
    return <div className="loading" />;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="wrapper">
      <div className="quote-container">
        <div className="quote-text">
          <span className="quote">{quotes.quote}</span>
        </div>
        <div className="quote-author">
          <span className="author">{quotes.author}</span>
          <span className="category">{quotes.category}</span>
        </div>
      </div>
    </div>
  );
};

export default Quote;
