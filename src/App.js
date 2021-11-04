import "./App.css";

import React from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";

const App = () => {
  return (
    <div>
      <NavBar />
      <News key="general" pageSize={6} country="in" category="general" />
    </div>
  );
};

export default App;
