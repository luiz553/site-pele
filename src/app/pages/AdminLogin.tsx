import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAdmin } from "../../utils/auth";

export default function AdminLogin() {
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    if (loginAdmin(senha)) {
      navigate("/admin/dashboard");
    } else {
      setErro("Senha incorreta");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded shadow w-80"
      >
        <h1 className="text-xl font-bold mb-4 text-center">
          Área Administrativa
        </h1>

        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="w-full border px-3 py-2 rounded mb-3"
        />

        {erro && <p className="text-red-500 text-sm mb-2">{erro}</p>}

        <button className="w-full bg-pink-600 text-white py-2 rounded">
          Entrar
        </button>
      </form>
    </div>
  );
}
