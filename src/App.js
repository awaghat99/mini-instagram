import "./App.css";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Login from "./components/Login";

function App() {
  const [pageToRender, setPageToRender] = useState(<Login />);
  return (
    <div className="App">
      <Sidebar setPageToRender={setPageToRender} />
      {pageToRender}
    </div>
  );
}

export default App;
