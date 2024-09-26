// import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./login";
import ForgotPassword from "./ForgotPassword";
import ResetLinkSent from "./ResetLinkSent";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/resetlinksent" element={<ResetLinkSent />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
