import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ybdkdnlhbimazknnxzrc.supabase.co";
const supabaseKey = "ybdkdnlhbimazknnxzrc";

export const supabase = createClient(supabaseUrl, supabaseKey);
