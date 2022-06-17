import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import "./App.css";

const App = () => {
  let users = [
    { lastName: "Sergeev", age: 16, id: "1" },
    { lastName: "Sergeev", age: 16, id: "2" },
    { lastName: "Sergeev", age: 16, id: "3" },
    { lastName: "Sergeev", age: 16, id: "4" },
    { lastName: "Sergeev", age: 16, id: "5" },
  ];
  return (
    <div>
      <Header />
      <Section users={users} />
      <Footer />
    </div>
  );
};

export default App;
