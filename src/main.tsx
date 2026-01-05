
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import "./styles/index.css";

  createRoot(document.getElementById("root")!).render(<App />);
  
  <Route path="/admin" element={<AdminLogin />} />

<Route element={<AdminRoutes />}>
  <Route path="/admin" element={<AdminLayout />}>
    <Route path="dashboard" element={<AdminDashboard />} />
    <Route path="agendamentos" element={<AdminAgendamentos />} />
  </Route>
</Route>
