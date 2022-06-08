import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyInfoComponent />
      </header>
    </div>
  );
}

const MyInfoComponent = () => {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [moviesArr, setMoviesArr] = useState(["", "", ""]);

  return (
    <div>
      <p>My favorite name is {name}</p>
      <input
        type="text"
        placeholder="Name"
        onChange={(event) => {
          const value = event.target.value;
          setName(value);
        }}
      ></input>
      <p style={{ backgroundColor: color }}>My favorite color is {color}</p>
      <input
        type="text"
        placeholder="Color"
        onChange={(event) => {
          const value = event.target.value;
          setColor(value);
        }}
      ></input>
      <p>My favorite movies are :</p>
      <input
        type="text"
        placeholder="1st Favorite Movie"
        onChange={(event) => {
          const value = event.target.value;
          setMoviesArr([value, moviesArr[1], moviesArr[2]]);
        }}
      ></input>
      &nbsp; &nbsp;
      <input
        type="text"
        placeholder="2nd Favorite Movie"
        onChange={(event) => {
          const value = event.target.value;
          setMoviesArr([moviesArr[0], value, moviesArr[2]]);
        }}
      ></input>
      &nbsp; &nbsp;
      <input
        type="text"
        placeholder="3rd Favorite Movie"
        onChange={(event) => {
          const value = event.target.value;
          setMoviesArr([moviesArr[0], moviesArr[1], value]);
        }}
      ></input>
      <ol>
        {moviesArr.map((movie) => (
          <li>{movie}</li>
        ))}
      </ol>
    </div>
  );
};

export default App;
