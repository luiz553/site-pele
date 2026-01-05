import { useState } from "react";

type Agendamento = {
  id: number;
  cliente: string;
  data: string;
  hora: string;
  status: "Pendente" | "Confirmado" | "Cancelado";
};

export default function AdminAgendamentos() {
  const [agendamentos, setAgendamentos] = useState<Agendamento[]>([
    {
      id: 1,
      cliente: "Maria Silva",
      data: "12/01/2026",
      hora: "15:00",
      status: "Pendente",
    },
  ]);

  function alterarStatus(id: number, status: Agendamento["status"]) {
    setAgendamentos((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status } : a))
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Agendamentos</h1>

      <table className="w-full bg-white rounded shadow">
        <thead>
          <tr className="bg-gray-200">
            <th>Cliente</th>
            <th>Data</th>
            <th>Hora</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {agendamentos.map((a) => (
            <tr key={a.id} className="text-center border-t">
              <td>{a.cliente}</td>
              <td>{a.data}</td>
              <td>{a.hora}</td>
              <td>{a.status}</td>
              <td className="space-x-2">
                <button
                  onClick={() => alterarStatus(a.id, "Confirmado")}
                  className="bg-green-500 text-white px-2 py-1 rounded"
                >
                  Confirmar
                </button>
                <button
                  onClick={() => alterarStatus(a.id, "Cancelado")}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Cancelar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
