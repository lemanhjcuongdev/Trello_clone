import React from "react";
import styled from "styled-components";

import "./App.css";
import BoardHeading from "./layouts/BoardHeading/BoardHeading";
import Container from "./layouts/Container/Container";
import Header from "./layouts/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <BoardHeading />
      <Container />
    </div>
  );
}

export default App;
