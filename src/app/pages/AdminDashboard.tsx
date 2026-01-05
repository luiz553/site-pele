import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function AdminDashboard() {
  const [agendamentos, setAgendamentos] = useState<any[]>([]);

  useEffect(() => {
    buscarAgendamentos();
  }, []);

  async function buscarAgendamentos() {
    const { data, error } = await supabase
      .from("agendamentos")
      .select("*")
      .order("data", { ascending: true });

    if (!error) setAgendamentos(data || []);
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Painel Administrativo</h1>

      {agendamentos.map(item => (
        <div key={item.id} style={{ borderBottom: "1px solid #ccc", marginBottom: 10 }}>
          <p><strong>Nome:</strong> {item.nome_cliente}</p>
          <p><strong>Email:</strong> {item.email}</p>
          <p><strong>Serviço:</strong> {item.servico}</p>
          <p><strong>Data:</strong> {item.data}</p>
        </div>
      ))}
    </div>
  );
}
