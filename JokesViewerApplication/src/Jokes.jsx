import React, { useEffect, useState } from "react";
import getJokes from "./services/userService";
import "./Jokes.css";

const Jokes = () => {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchJokes = async () => {
    try {
      setLoading(true);
      const res = await getJokes();

      if (res) {
        setJokes(res.data.data.data); // ✅ full array
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJokes();
  }, []);

  return (
    <div className="container">
      <h2 className="heading">😂 Jokes Collection</h2>

      <div className="grid">
        {jokes.map((joke) => (
          <div key={joke.id} className="card">
            <p className="jokeText">{joke.content}</p>

            {joke.categories.length > 0 && (
              <span className="tag">{joke.categories[0]}</span>
            )}
          </div>
        ))}
      </div>

      <div className="buttonContainer">
        <button className="btn" onClick={fetchJokes}>
          {loading ? "Loading..." : "Refresh Jokes 🔄"}
        </button>
      </div>
    </div>
  );
};

export default Jokes;