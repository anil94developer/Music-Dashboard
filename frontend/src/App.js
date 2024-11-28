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
import PaymentOperations from "./Components/PaymentOperations/PaymentOperations";
import FinancialReport from "./Components/FinancialReports/FinancialReports";
import UserAccessForm from "./Components/UserAccess/UserAccessForm";
import { AllDraft } from "./Components/AllDraft/AllDraft";
import { ReleaseDetails } from "./Components/AllRelease/ReleaseDetails";
import FinalSubmit from "./Components/One-release/FinalSubmit";
import EditUserPermission from "./Components/UserAccess/EditUserPermssion";
import UserAccess from "./Components/UserAccess/UserAccess";
 
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/Dashboard" element={<Dashboard />}></Route>
      <Route path="/One Release" element={<OneRelease />}></Route> 
      <Route path="/main-step" element={<MainStep />}></Route>
      <Route path="All releases" element={<AllRelease />}></Route>
      <Route path="/final-submit" element={<FinalSubmit />}></Route>  
      <Route path="/All drafts" element={<AllDraft />}></Route>
      <Route path="/all tracks" element={<AllTracks />}></Route>
      <Route path="/over-view" element ={<OverView />}></Route>
      <Route path="/Daily Trends" element ={<DailyTreads />}></Route>
      <Route path="/profile" element ={<Profile />}></Route>
      <Route path="/bank information" element ={<BankInformation />}></Route>
      <Route path="/support" element ={<Support />}></Route>
      <Route path="/password change" element ={<Password />}></Route>
      <Route path="/user access" element={<UserAccess />}></Route>  
      <Route path="/User Mangement" element={<UserMangement />}></Route>  

      <Route path="/add-user" element={<UserAccessForm />}></Route>  
      <Route path="/release-details" element={<ReleaseDetails />}></Route>  
      <Route path="/edit-permission" element={<EditUserPermission />}></Route>  



      
      <Route path="/Payment Operations" element={<PaymentOperations />}></Route>  

      <Route path="/Financial Report" element={<FinancialReport />}></Route>  

      <Route path="/multiple-release" element={<Dashboard />}></Route>
      

    </Routes>
  );
}

export default App;
