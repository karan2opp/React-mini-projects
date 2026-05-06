import React, { useEffect, useState } from "react";
import getQuotes from "./services/qoutesService";
import "./Quotes.css"

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchQuotes = async () => {
    try {
      setLoading(true);
      const res = await getQuotes();

      if (res) {
        setQuotes(res.data.data.data); // ✅ correct
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <div className="container">
      <h2 className="heading">💬 Quotes Collection</h2>

      <div className="grid">
        {quotes.map((quote) => (
          <div key={quote.id} className="card">
            
            {/* Quote */}
            <p className="text">“{quote.content}”</p>

            {/* Author */}
            <p className="author">— {quote.author}</p>

            {/* Tags */}
            {quote.tags.length > 0 && (
              <div className="tags">
                {quote.tags.map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="buttonContainer">
        <button className="btn" onClick={fetchQuotes}>
          {loading ? "Loading..." : "Refresh Quotes 🔄"}
        </button>
      </div>
    </div>
  );
};

export default Quotes;