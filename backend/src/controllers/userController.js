import supabase from "../config/supabaseClient.js";
export async function getUserProfiles(req, res) {
  const { data, error } = await supabase
    .from("user_profiles")
    .select("id, date_of_birth, bio");

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.json(data);
}
