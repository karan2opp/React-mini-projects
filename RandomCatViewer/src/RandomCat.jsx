import React, { useEffect, useState } from "react";
import axios from "axios";
import "./RandomCat.css";

const RandomCat = () => {
  const [cat, setCat] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchCat = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://api.freeapi.app/api/v1/public/cats/cat/random"
      );

      setCat(res.data.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCat();
  }, []);

  return (
    <div className="container">
      <h2 className="heading">🐱 Random Cat Viewer</h2>

      {loading ? (
        <p className="loading">Loading...</p>
      ) : cat && (
        <div className="card">
          
          <img src={cat.image} alt={cat.name} className="image" />

          <div className="content">
            <h3>{cat.name}</h3>
            <p><b>Origin:</b> {cat.origin}</p>
            <p><b>Life Span:</b> {cat.life_span} yrs</p>

            <p className="desc">{cat.description}</p>

            <p><b>Temperament:</b> {cat.temperament}</p>
          </div>
        </div>
      )}

      <button className="btn" onClick={fetchCat}>
        {loading ? "Loading..." : "Get Another Cat 🐾"}
      </button>
    </div>
  );
};

export default RandomCat;