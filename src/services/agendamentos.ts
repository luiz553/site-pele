import { supabase } from "../lib/supabase";

export interface Agendamento {
  id?: string;
  nome: string;
  email: string;
  telefone: string;
  servico: string;
  data: string;
  hora: string;
  created_at?: string;
}

export async function criarAgendamento(dados: Agendamento) {
  const { error } = await supabase
    .from("agendamentos")
    .insert([dados]);

  if (error) {
    throw error;
  }
}

export async function listarAgendamentos() {
  const { data, error } = await supabase
    .from("agendamentos")
    .select("*")
    .order("data", { ascending: true });

  if (error) {
    throw error;
  }

  return data;
}
