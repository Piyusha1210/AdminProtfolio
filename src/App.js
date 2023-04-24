import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/login/login";
import Dashboard from "./Pages/dashboard/dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
