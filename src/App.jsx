import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Loader from "./Loader";
const App = () => {
  const [quote, setQuote] = useState({});
  const arr = [
    "forgiveness",
    "freedom",
    "friendship",
    "funny",
    "future",
    "god",
    "good",
    "imagination",
    "inspirational",
    "intelligence",
    "knowledge",
    "leadership",
    "learning",
    "movies",
    "success",
  ];
  const [loading, setLoading] = useState(true);
  const handleClick = () => {
    fetchAllQuotes();
  };
  const fetchAllQuotes = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://api.api-ninjas.com/v1/quotes?category=${
          arr[Math.floor(Math.random() * arr.length)]
        }`,
        {
          headers: { "X-Api-Key": "LttlIQGU7jA7+SeytOuFMA==EcPiP7zDaFZ0J3sA" },
        }
      );
      setQuote(data[0]);
      setLoading(false);
    } catch (err) {
      alert(err);
      setLoading(true);
    }
  };
  useEffect(() => {
    fetchAllQuotes();
    console.log("mounted");
  }, []);
  return (
    <div className="app">
      {loading ? (
        <Loader />
      ) : (
        <div className="white-box">
          <h3>{quote?.quote}</h3>
          <p>- {quote?.author}</p>
          <button onClick={handleClick}>Motivate Me!!</button>
        </div>
      )}
    </div>
  );
};

export default App;
