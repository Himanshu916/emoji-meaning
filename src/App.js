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
  const [meaning, setMeaning] = useState("translation will appear here..");
  function inputChangeHandler(e) {
    userInput = e.target.value;
    setUserInput(userInput);

    if (userInput in emojidictionary) {
      setMeaning(emojidictionary[userInput]);
    } else {
      setMeaning("failure to recognise this emoji");
    }
  }

  function clickHandler(emoji) {
    var meaning = "";
    setMeaning(meaning);
    setUserInput(emojidictionary[emoji]);
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
      <h3>{meaning}</h3>
      {getEmoji()}
    </div>
  );
}
