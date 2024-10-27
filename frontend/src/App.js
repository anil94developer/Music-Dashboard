import { Routes, Route } from "react-router-dom";
import { Login } from "./Components/Login/Login";
import { Dashboard } from "./Components/Dashboard/Dashboard";
import { OneRelease } from "./Components/One-release/OneRelease";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/one-release" element={<OneRelease />}></Route> 
      <Route path="/multiple-release" element={<Dashboard />}></Route>

    </Routes>
  );
}

export default App;
