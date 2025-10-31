import express from "express";
import cors from "cors";
import supabase from "./supabaseClient.js";
import "dotenv/config";

const app = express()
app.use(cors());
app.use(express.json());

// GET /users/profiles
app.get('/users/profiles', async (req, res) => {
  const { data, error } = await supabase
    .from('user_profiles')
    .select('id, date_of_birth, bio')

  if (error) {
    return res.status(500).json({ error: error.message })
  }

  res.json(data)
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

