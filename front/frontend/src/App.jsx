import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ThreatAnalyzer from "./components/ThreatAnalyzer";
import LoginMonitor from "./components/LoginMonitor";
// import Dashboard from "./components/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<ThreatAnalyzer />} />
        <Route path="/analyzer" element={<ThreatAnalyzer />} />
        <Route path="/login-monitor" element={<LoginMonitor />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
