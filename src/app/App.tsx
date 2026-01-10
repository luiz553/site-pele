import { BrowserRouter, Routes, Route } from "react-router-dom";

import Agendamentos from "./pages/Agendamentos";
import AdminDashboard from "./pages/AdminDashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Site do cliente */}
        <Route path="/" element={<Agendamentos />} />

        {/* Painel admin */}
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
