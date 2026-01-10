import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";




export default function AdminDashboard() {
  const [agendamentos, setAgendamentos] = useState<any[]>([]);

  useEffect(() => {
    fetchAgendamentos();
  }, []);

  async function fetchAgendamentos() {
    const { data, error } = await supabase
      .from("agendamentos")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setAgendamentos(data);
    }
  }

  return (
    <div>
      <h1>Admin - Agendamentos</h1>

      {agendamentos.map((a) => (
        <div key={a.id} style={{ border: "1px solid #ccc", marginBottom: 10, padding: 10 }}>
          <p><strong>Nome:</strong> {a.nome}</p>
          <p><strong>Email:</strong> {a.email}</p>
          <p><strong>Serviço:</strong> {a.servico}</p>
          <p><strong>Data:</strong> {a.data}</p>
          <p><strong>Horário:</strong> {a.horario}</p>
        </div>
      ))}
    </div>
  );
}
