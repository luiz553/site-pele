import { Outlet, useNavigate } from "react-router-dom";
import { logoutAdmin } from "../../utils/auth";

export default function AdminLayout() {
  const navigate = useNavigate();

  function sair() {
    logoutAdmin();
    navigate("/admin");
  }

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-pink-700 text-white p-6">
        <h2 className="text-xl font-bold mb-6">Clínica PELE</h2>

        <nav className="flex flex-col gap-4">
          <button
            onClick={() => navigate("/admin/dashboard")}
            className="text-left"
          >
            Dashboard
          </button>

          <button
            onClick={() => navigate("/admin/agendamentos")}
            className="text-left"
          >
            Agendamentos
          </button>

          <button
            onClick={sair}
            className="text-left text-red-200 mt-6"
          >
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
