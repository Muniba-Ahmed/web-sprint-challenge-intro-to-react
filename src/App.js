import React, { useState, useEffect } from "react";
import axios from "axios";
import Character from "./components/Character";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [jedi, setJedi] = useState([]);
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

        setJedi(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="App">
      <h1 className="Header">StarWars Characters</h1>
      {jedi.map((info) => {
        return <Character info={info} key={info.name} />;
      })}
      {/* {currentJediId && <Character jedi={jedi} />} */}
    </div>
  );
};

export default App;
