import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const convertUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case.", "success");
  };

  const convertLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case.", "success");
  };

  const copyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard.", "success");
  };

  const removeExtraSpaces = () => {
    var t = text.split(/[ ]+/);
    setText(t.join(" "));
    props.showAlert("Extra spaces are removed.", "success");
  };

  const clearText = () => {
    setText("");
    props.showAlert("Text cleared.", "success");
  };

  const capitalFirstLetter = () => {
    let newText = text
      .split(" ")
      .map((el) => el.charAt(0).toUpperCase() + el.slice(1))
      .join(" ");
    setText(newText);
    props.showAlert("First Letter is capitalized.", "success");
  };

  const countVowels = () => {
    const count = text.match(/[aeiou]/gi).length;
    if (count === 1) setText("There is 1 vowel present in the text.");
    else if(count > 1) setText("There are " + count + " vowels present in the text.");
    else setText("No vowel is present in the text.");

    props.showAlert("Vowels counted.", "success");
  };

  const countConsonants = () => {
    const count = text.match(/[bcdfghjklmnpqrstvwxyz]/gi).length;
    if (count === 0) setText("No consonant is present in the text.");
    else if (count === 1) setText("There is 1 consonant present in the text.");
    else setText("There are " + count + " consonants present in the text.");
    props.showAlert("Consonant counted.", "success");
  };

  const countWords = () => {
    const count = text.split(/\s+/).filter((elem) => {
      return elem.length !== 0;
    }).length;
    if (count === 1) setText("There is 1 word present in the text.");
    else setText("There are " + count + " words present in the text.");
    props.showAlert("Words counted.", "success");
  };

  const countCharacters = () => {
    const count = text.length;
    if (count === 1) setText("There is 1 character present in the text.");
    else setText("There are " + count + " characters present in the text.");
    props.showAlert("Characters counted.", "success");
  };

  const timeToRead = () => {
    const count =
      text.split(" ").filter((elem) => {
        return elem.length !== 0;
      }).length * 0.008;
    if (count === 1) setText("It takes 1 minute to read this text.");
    else setText("It takes " + count + " minutes to read this text.");
    props.showAlert("Time calculated.", "success");
  };

  const countSentences = () => {
    const count =
      text === ""
        ? text
            .trim()
            .split(".")
            .filter((text) => text !== "").length
        : text.split(".").length-1;
    if (count === 1) setText("There is 1 sentence present in the text.");
    else setText("There are " + count + " sentences present in the text.");
    props.showAlert("Sentences counted.", "success");
  };

  const change = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container">
        <h2
          id="nikhil"
          className="mb-3"
          style={{ color: props.col === "black" ? "white" : "black" }}
        >
          {props.heading}
        </h2>
        <div className="mb-3">
          <textarea
            className={`form-control bg-${props.col}`}
            value={text}
            onChange={change}
            style={{
              color: props.col === "black" ? "white" : "black",
              borderColor: props.col === "black" ? "white" : "black",
              fontSize: "20px",
            }}
            id="myBox"
            rows="10"
          ></textarea>
        </div>
        <button
          style={{
            color: props.col === "black" ? "white" : "black",
            borderWidth: "2px",
            borderRadius: "10px",
            borderStyle: "solid",
            borderColor: props.col === "black" ? "white" : "black",
          }}
          disabled={text.length === 0}
          className={`btn btn-${props.col} mx-1 my-1`}
          onClick={convertUpperCase}
        >
          Convert to UpperCase
        </button>
        <button
          style={{
            color: props.col === "black" ? "white" : "black",
            borderWidth: "2px",
            borderRadius: "10px",
            borderStyle: "solid",
            borderColor: props.col === "black" ? "white" : "black",
          }}
          disabled={text.length === 0}
          className={`btn btn-${props.col} mx-2 my-1`}
          onClick={convertLowerCase}
        >
          Convert to LowerCase
        </button>
        <button
          style={{
            color: props.col === "black" ? "white" : "black",
            borderWidth: "2px",
            borderRadius: "10px",
            borderStyle: "solid",
            borderColor: props.col === "black" ? "white" : "black",
          }}
          disabled={text.length === 0}
          className={`btn btn-${props.col} mx-1 my-1`}
          onClick={removeExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button
          style={{
            color: props.col === "black" ? "white" : "black",
            borderWidth: "2px",
            borderRadius: "10px",
            borderStyle: "solid",
            borderColor: props.col === "black" ? "white" : "black",
          }}
          disabled={text.length === 0}
          className={`btn btn-${props.col} mx-2 my-1`}
          onClick={copyText}
        >
          Copy to Clipboard
        </button>
        <button
          style={{
            color: props.col === "black" ? "white" : "black",
            borderWidth: "2px",
            borderRadius: "10px",
            borderStyle: "solid",
            borderColor: props.col === "black" ? "white" : "black",
          }}
          disabled={text.length === 0}
          className={`btn btn-${props.col} mx-1 my-1`}
          onClick={clearText}
        >
          Clear Text
        </button>
        <button
          style={{
            color: props.col === "black" ? "white" : "black",
            borderWidth: "2px",
            borderRadius: "10px",
            borderStyle: "solid",
            borderColor: props.col === "black" ? "white" : "black",
          }}
          disabled={text.length === 0}
          className={`btn btn-${props.col} mx-2 my-1`}
          onClick={capitalFirstLetter}
        >
          Capital First Letter
        </button>

        <button
          style={{
            color: props.col === "black" ? "white" : "black",
            borderWidth: "2px",
            borderRadius: "10px",
            borderStyle: "solid",
            borderColor: props.col === "black" ? "white" : "black",
          }}
          disabled={text.length === 0}
          className={`btn btn-${props.col} mx-1 my-1`}
          onClick={countVowels}
        >
          Count Vowels
        </button>

        <button
          style={{
            color: props.col === "black" ? "white" : "black",
            borderWidth: "2px",
            borderRadius: "10px",
            borderStyle: "solid",
            borderColor: props.col === "black" ? "white" : "black",
          }}
          disabled={text.length === 0}
          className={`btn btn-${props.col} mx-2 my-1`}
          onClick={countConsonants}
        >
          Count Consonants
        </button>

        <button
          style={{
            color: props.col === "black" ? "white" : "black",
            borderWidth: "2px",
            borderRadius: "10px",
            borderStyle: "solid",
            borderColor: props.col === "black" ? "white" : "black",
          }}
          disabled={text.length === 0}
          className={`btn btn-${props.col} mx-1 my-1`}
          onClick={countWords}
        >
          Count Words
        </button>

        <button
          style={{
            color: props.col === "black" ? "white" : "black",
            borderWidth: "2px",
            borderRadius: "10px",
            borderStyle: "solid",
            borderColor: props.col === "black" ? "white" : "black",
          }}
          disabled={text.length === 0}
          className={`btn btn-${props.col} mx-2 my-1`}
          onClick={countCharacters}
        >
          Count Characters
        </button>

        <button
          style={{
            color: props.col === "black" ? "white" : "black",
            borderWidth: "2px",
            borderRadius: "10px",
            borderStyle: "solid",
            borderColor: props.col === "black" ? "white" : "black",
          }}
          disabled={text.length === 0}
          className={`btn btn-${props.col} mx-1 my-1`}
          onClick={countSentences}
        >
          Count Sentences
        </button>

        <button
          style={{
            color: props.col === "black" ? "white" : "black",
            borderWidth: "2px",
            borderRadius: "10px",
            borderStyle: "solid",
            borderColor: props.col === "black" ? "white" : "black",
          }}
          disabled={text.length === 0}
          className={`btn btn-${props.col} mx-2 my-1`}
          onClick={timeToRead}
        >
          Time To Read
        </button>
      </div>
    </>
  );
}
