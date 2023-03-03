import React from "react";
import { Header } from "./components/Header";

import "./style.css";

const App = () => {
  return (
    <>
      <Header />
      <h1 className="app">
        Welcome to React App thats build using Webpack and Babel separately
      </h1>
    </>
  );
};

export default App;
