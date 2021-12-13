import React from "react";
import NavBar from "./components/Navbar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carrusel from "./components/Carrusel/Carrusel";

//import './index.css';

const App = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <body>
        <Carrusel/>
      </body>
    </>
  );
};

export default App;
