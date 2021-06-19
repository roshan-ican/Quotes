import React, { useState, useEffect } from "react";

const url = "https://api.quotable.io/random";

const App = () => {
  const [quotes, setQuotes] = useState([]);

  //Fetch Quotes from API
  const getQuote = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setQuotes(data));
  };

  useEffect(() => {
    getQuote();
  }, []);

  // calling the same function to get a new quote
  const getNewQuote = () => {
    getQuote();
  };

  const tweetQuote = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quotes.content} - ${quotes.author}`;
    window.open(twitterUrl, "_blank");
  };

  const { content, author } = quotes;

  // rendering the fetched contents
  return (
    <div className="box-centerside">
      <div className="text">
        <p>{content}</p>
      </div>
      <div className="author">
        <h5>{author}</h5>
        <div className="button-container">
          <button className="twitter-button" onClick={tweetQuote}>
            <i className="fa fa-twitter"></i>
          </button>
          <button onClick={getNewQuote}>New Quote</button>
        </div>
      </div>
    </div>
  );
};

export default App;
