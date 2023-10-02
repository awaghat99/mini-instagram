import "./App.css";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [pageToRender, setPageToRender] = useState(
    <Home loggedIn={loggedIn} />
  );
  return (
    <div className="App">
      <div className="sidebar">
        <Sidebar setPageToRender={setPageToRender} loggedIn={loggedIn} />
      </div>
      <div className="main-content">{pageToRender}</div>
    </div>
  );
}

export default App;
