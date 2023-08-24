import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./componentes/Navbar/Navbar";
import Titulo from "./componentes/Titulo/Titulo";
import Footer from "./componentes/Footer/Footer";


function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Titulo />
      <Footer />
    </div>
  );
}

export default App;
