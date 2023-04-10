import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import Signup from "./user/Signup";
import axios from "axios";
import StartNavbar from "./Frontend/StartNavbar";
import BottomNav from "./Frontend/BottomNav";
import StartPage from "./Frontend/StartPage";
import DiscordServices from "./services/DiscordServices";
import InnerNavbar from "./Dashboard/InnerNavbar";
import InnerbottomNav from "./Dashboard/InnerbottomNav";
import TelegramServices from "./services/TelegramServices";
import Dashboard from "./Dashboard/Dashboard";
import AddFunds from "./user/AddFunds";
import Orders from "./user/Orders";
import Services from "./Dashboard/Services";
// import { Dashboard } from "@mui/icons-material";

function App() {
  axios.defaults.withCredentials = true;
  return (
    <div className="bg-white">
      <Routes>
        <Route path="/Signup" element={<Signup />} />
        <Route path="/StartNav" element={<StartNavbar />} />
        <Route path="/BottomNav" element={<BottomNav />} />
        <Route path="/" element={<StartPage />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/AddFunds" element={<AddFunds />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/TelegramServices" element={<TelegramServices />} />
        <Route path="/InnerbottomNav" element={<InnerbottomNav />} />
        <Route path="/InnerNavbar" element={<InnerNavbar />} />
        <Route path="/DiscordServices" element={<DiscordServices />} />
      </Routes>
    </div>
  );
}

export default App;
