import React, { Component, useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "./App.css";

function App() {
  const arr = [
    "its amazing",
    "keep it up",
    "carry on",
    "woo its crazy",
    "i love it",
  ];
  const [loc, setloc] = useState(0);
  var newLoc = arr[loc];
  useEffect(() => {
    if (loc === arr.length) {
      setloc(0);
    } else {
      setTimeout(() => {
        for (let i = loc; i <= arr.length - 1; i++) {
          setloc(loc + 1);
        }
      }, 4000);
    }
  }, [loc]);
  return (
    <>
      <h1>{newLoc}</h1>
    </>
  );
}

export default App;
