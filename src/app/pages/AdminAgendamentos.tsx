import { useState } from "react";
import { supabase } from "../../lib/supabase";

export default function Agendamento() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [servico, setServico] = useState("");
  const [data, setData] = useState("");

  async function agendar() {
    const { error } = await supabase.from("agendamentos").insert([
      {
        nome_cliente: nome,
        email,
        servico,
        data
      }
    ]);

    if (error) {
      alert("Erro ao agendar");
      console.error(error);
    } else {
      alert("Agendamento realizado com sucesso!");
      setNome("");
      setEmail("");
      setServico("");
      setData("");
    }
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Agendamento - Clínica de Estética</h1>

      <input placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} />
      <br />

      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <br />

      <input placeholder="Serviço" value={servico} onChange={e => setServico(e.target.value)} />
      <br />

      <input type="date" value={data} onChange={e => setData(e.target.value)} />
      <br /><br />

      <button onClick={agendar}>Agendar</button>
    </div>
  );
}
