const { createClient } = require("@supabase/supabase-js");
require("dotenv").config();

const { SUPABASE_URL, SUPABASE_ANON_KEY } = process.env;

//VALIDA QUE EXISTAN
if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    throw new Error("Faltan SUPABASE_URL o SUPABASE_ANON_KEY en .env");
}

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

module.exports = supabase;