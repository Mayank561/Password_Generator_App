import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [password, setPassword] = useState("");
  const [sliderValue, setSliderValue] = useState(8);
  const [copyMessage, setCopyMessage] = useState("");

  const lowerChars = "abcdefghijklmnopqrstuvwxyz";
  const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const allNumbers = "0123456789";
  const allSymbols = "~!@#$%^&*";

  const handleSliderChange = (event) => {
    const value = parseInt(event.target.value);
    setSliderValue(value);
  };

  const generatePassword = () => {
    let allChars = "";

    allChars += lowercase.checked ? lowerChars : "";
    allChars += uppercase.checked ? upperChars : "";
    allChars += numbers.checked ? allNumbers : "";
    allChars += symbols.checked ? allSymbols : "";

    if (allChars === "" || allChars.length === 0) {
      return "";
    }

    let genPassword = "";
    for (let i = 1; i <= sliderValue; i++) {
      genPassword += allChars.charAt(
        Math.floor(Math.random() * allChars.length)
      );
    }

    return genPassword;
  };

  const handleGenerateClick = () => {
    const newPassword = generatePassword();
    setPassword(newPassword);
  };

  const handleCopyClick = () => {
    if (password) {
      navigator.clipboard.writeText(password);
      setCopyMessage("Password Copied");

      setTimeout(() => {
        setCopyMessage("");
      }, 3000);
    }
  };

  return (
    <div>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <title>Password Generator</title>
      <div className="cont">
        <div className="container">
          <div className="inputBox">
            <input
              type="text"
              className="passBox"
              id="passBox"
              value={password}
              readOnly
            />
            <span
              className="material-icons"
              id="copyIcon"
              onClick={handleCopyClick}
            >
              content_copy
            </span>
            {copyMessage && <p className="copyMessage">{copyMessage}</p>}
          </div>
          <div className="row">
            <p>Character Length</p>
            <span id="sliderValue">{sliderValue}</span>
          </div>
          <input
            type="range"
            min={1}
            max={30}
            value={sliderValue}
            onChange={handleSliderChange}
            id="inputSlider"
          />
          <div className="row">
            <input
              type="checkbox"
              name="lowercase"
              id="lowercase"
              defaultChecked
            />
            <label htmlFor="lowercase">Include Lowercase Letters </label>
          </div>
          <div className="row">
            <input
              type="checkbox"
              name="uppercase"
              id="uppercase"
              defaultChecked
            />
            <label htmlFor="uppercase">Include Uppercase Letters</label>
          </div>
          <div className="row">
            <input type="checkbox" name="numbers" id="numbers" defaultChecked />
            <label htmlFor="numbers">Include Numbers</label>
          </div>
          <div className="row">
            <input type="checkbox" name="symbols" id="symbols" defaultChecked />
            <label htmlFor="symbols">Include Symbols</label>
          </div>
          <button
            type="button"
            className="genBtn"
            id="genBtn"
            onClick={handleGenerateClick}
          >
            Generate Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
