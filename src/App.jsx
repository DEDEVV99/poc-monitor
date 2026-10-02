import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Monitoring from "./pages/Monitoring";
import Tentang from "./pages/Tentang";

import Sidebar from "./components/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/monitoring" element={<Monitoring />} />
            <Route path="/tentang" element={<Tentang />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;