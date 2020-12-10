import React, { useState } from "react";
import "./styles.css";
const emojidictionary = {
  "😷": "coronavirus",
  "🤨": "suspicious",
  "🥺": "pleading",
  "😎": "confident or carefree attitude",
  "🥳": "partying or enjoying",
  "🤟": "love you gesture"
};

var emojis = Object.keys(emojidictionary);

export default function App() {
  var [userInput, setUserInput] = useState("");
  function inputChangeHandler(e) {
    var meaning = e.target.value;
    setUserInput(meaning);
  }

  function clickHandler(emoji) {
    var meaning = emojidictionary[emoji];
    setUserInput(meaning);
  }
  function getEmoji() {
    return emojis.map((emoji) => {
      return (
        <span
          key={emoji}
          onClick={() => {
            clickHandler(emoji);
          }}
          style={{ fontSize: "2rem", padding: ".5rem", cursor: "pointer" }}
        >
          {emoji}
        </span>
      );
    });
  }
  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input
        style={{
          width: "50%",
          border: "2px solid black",
          padding: ".5rem",
          borderRadius: "10px"
        }}
        onChange={inputChangeHandler}
      ></input>

      <h2>{userInput}</h2>
      {getEmoji()}
    </div>
  );
}
