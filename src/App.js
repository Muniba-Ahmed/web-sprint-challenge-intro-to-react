import React, { useState, useEffect } from "react";
import axios from "axios";
import Character from "./components/Character";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [jedis, setJedis] = useState([]);
  // const [currentJediId, setCurrentJediId] = useState(null);

  // const openDetails = (id) => {
  //   setCurrentJediId(id);
  // };
  // const closeDetails = () => {
  //   setCurrentJediId(null);
  // };

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/`)
      .then((res) => {
        // console.log(res.data);

        setJedis(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="App">
      <h1 className="Header">StarWars Characters</h1>
      {jedis.map((jedi) => {
        return jedis && <Character info={jedi} key={jedi.id} />;
      })}
    </div>
  );
};

export default App;
