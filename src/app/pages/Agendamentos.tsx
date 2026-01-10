import { useState } from "react";
import { supabase } from "../../lib/supabase";


export default function Agendamento() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    servico: "",
    data: "",
    horario: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const { error } = await supabase
      .from("agendamentos")
      .insert([form]);

    if (error) {
      alert("Erro ao agendar");
      console.error(error);
    } else {
      alert("Agendamento realizado com sucesso!");
      setForm({
        nome: "",
        email: "",
        servico: "",
        data: "",
        horario: "",
      });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Agendamento</h1>

      <input name="nome" placeholder="Nome" value={form.nome} onChange={handleChange} />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
      <input name="servico" placeholder="Serviço" value={form.servico} onChange={handleChange} />
      <input type="date" name="data" value={form.data} onChange={handleChange} />
      <input name="horario" placeholder="Horário" value={form.horario} onChange={handleChange} />

      <button type="submit">Agendar</button>
    </form>
  );
}
