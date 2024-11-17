import { Routes, Route } from "react-router-dom";
import { Login } from "./Components/Login/Login";
import { Dashboard } from "./Components/Dashboard/Dashboard";
import { OneRelease } from "./Components/One-release/OneRelease";
import { MainStep } from "./Components/One-release/MainStep";
import { AllRelease } from "./Components/AllRelease/AllRelease";
import { AllTracks } from "./Components/AllTracks/AllTracks";
import OverView from "./Components/OverView/OverView";
import DailyTreads from "./Components/DailyTreads/DailyTreads";
import Profile from "./Components/Profile/Profile";
import BankInformation from "./Components/BankInformation/BankInformation";
import Support from "./Components/Support/Support";
import Password from "./Components/Password/Password";
import UserMangement from "./Components/UserMangement/UserMangement";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/one-release" element={<OneRelease />}></Route> 
      <Route path="/main-step" element={<MainStep />}></Route>
      <Route path="/all-release" element={<AllRelease />}></Route>
      <Route path="/all-tracks" element={<AllTracks />}></Route>
      <Route path="/over-view" element ={<OverView />}></Route>
      <Route path="/daily-treads" element ={<DailyTreads />}></Route>
      <Route path="/profile" element ={<Profile />}></Route>
      <Route path="/bank-information" element ={<BankInformation />}></Route>
      <Route path="/support" element ={<Support />}></Route>
      <Route path="/password-change" element ={<Password />}></Route>
      <Route path="/user-access" element={<UserMangement />}></Route>  
      <Route path="/payment-operations" element={<UserMangement />}></Route>  

      <Route path="/financial-reports" element={<UserMangement />}></Route>  

      <Route path="/multiple-release" element={<Dashboard />}></Route>

    </Routes>
  );
}

export default App;
