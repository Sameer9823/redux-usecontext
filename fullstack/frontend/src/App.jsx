import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  // useEffect(() => {
  //   axios.get("/api/jokes")
  //   .then((res) => {
  //   setJokes(res.data);
  //   }).catch((err) => {
  //     console.log(err);
  //   })
  // });

  useEffect(() => {
    const controller = new AbortController()
    ;(async () => {
      try {
        setLoading(true);
        setError(false);
        const res = await axios.get("/api/jokes?search=" + search, {
          signal: controller.signal,
        });
        console.log(res.data);
        
        setJokes(res.data);
        setLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          return;
        }
        setError(true);
        setLoading(false);
      }
    })();

    return () => {
      controller.abort();
    };
  }, [search]);

  return (
    <>
      <h1>fullstack</h1>
      <input
        type="text"
        placeholder="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading && <p>Loading...</p>}

      {error && <p>Something went wrong</p>}

      <p>Jokes: {jokes.length}</p>
      {jokes.map((joke, index) => (
        <div key={joke.id}>
          <p>{joke.name}</p>
          <h4>{joke.price}</h4>
        </div>
      ))}
    </>
  );
}

export default App;
