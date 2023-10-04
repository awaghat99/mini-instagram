import "./App.css";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [pageToRender, setPageToRender] = useState(
    <Home key="1" setLoggedIn={setLoggedIn} />
  );
  return (
    <div className="App">
      <div className="sidebar">
        <Sidebar setPageToRender={setPageToRender} setLoggedIn={setLoggedIn} />
      </div>
      <div className="main-content">
        {loggedIn ? pageToRender : <Login setLoggedIn={setLoggedIn} />}
      </div>
    </div>
  );
}

export default App;
