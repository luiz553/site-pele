import { Outlet, useNavigate } from "react-router-dom";
import { logoutAdmin } from "../utils/auth";

export default function AdminLayout() {
  const navigate = useNavigate();

  function sair() {
    logoutAdmin();
    navigate("/admin");
  }

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-pink-700 text-white p-4">
        <h2 className="text-xl font-bold mb-6">Clínica PELE</h2>

        <nav className="space-y-3">
          <button onClick={() => navigate("/admin/dashboard")}>
            Dashboard
          </button>
          <button onClick={() => navigate("/admin/agendamentos")}>
            Agendamentos
          </button>
          <button onClick={sair} className="text-red-200">
            Sair
          </button>
        </nav>
      </aside>

      <main className="flex-1 bg-gray-100 p-6">
        <Outlet />
      </main>
    </div>
  );
}
