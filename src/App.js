import React from "react";
import "./App.css";
import ComboBanner from "./components/ComboBanner";
import Header from "./components/Header";
import Menu from "./components/Menu";

function App() {
  return (
    <main>
      <Header />
      <ComboBanner />
      <Menu />
    </main>
  );
}

export default App;
