import "./App.css";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Login from "./components/Login";

function App() {
  const [pageToRender, setPageToRender] = useState(<Login />);
  return (
    <div className="App">
      <div className="sidebar">
        <Sidebar setPageToRender={setPageToRender} />
      </div>
      <div className="main-content">{pageToRender}</div>
    </div>
  );
}

export default App;
