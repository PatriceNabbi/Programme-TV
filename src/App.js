import React from "react";
import "./App.css";
import Header from "../src/components/headers/Header";
import Content from "./components/contents/Content";

function App() {
  return (
    <div className="wrapper">
      <Header></Header>
      <Content></Content>
    </div>
  );
}

export default App;
