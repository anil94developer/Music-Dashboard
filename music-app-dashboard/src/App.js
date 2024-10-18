import { Routes, Route } from "react-router-dom";
import './App.css';
import { Login } from "./Components/Login/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
    </Routes>
  );
}

export default App;
