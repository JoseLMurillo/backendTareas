const supabase = require("../../config/supabaseClient");

// CREATE
async function crearTarea(title) {
    const { data, error } = await supabase
        .from("tasks")
        .insert([{ title }])
        .select()
        .single(); //[{title: "Comprar huevos"}] -> tarea[0].title
                   //tarea.title

    if (error) throw new Error(error.message);
    return data;
}

async function crearVariasTarea(tareas) {
    const { data, error } = await supabase
        .from("tasks")
        .insert([{title: "Comprar huevos"}, {title: "Limpiar la casa"}])
        .select()
        .single();

    if (error) throw new Error(error.message);
    return data;
}

// READ ALL  || .select("title, description") | SELECT * FROM
async function obtenerTareas() {
    const { data, error } = await supabase
        .from("tasks")
        .select("id, title")
        .order("id", { ascending: true });

    if (error) throw new Error(error.message);

    return data ?? [];
}

// READ ONE || eq = EQUAL (IGUAL)
async function obtenerTareaPorId(id) {
    const { data, error } = await supabase
        .from("tasks")
        .select("*")
        .eq("id", id)
        .single();

    if (error) {
        const err = new Error("Tarea no encontrada");
        err.status = 404;
        throw err;
    }
    return data;
}

// UPDATE
async function actualizarTarea(id, updates) {
    const { data, error } = await supabase
        .from("tasks")
        .update(updates)
        .eq("id", id)
        .select();

    if (error) throw new Error(error.message);
    
    if (data.length === 0) {
        const err = new Error("Tarea no encontrada");
        err.status = 404;
        throw err;
    }
    return data[0];
}

// DELETE
async function eliminarTarea(id) {
    const { data, error } = await supabase
        .from("tasks")
        .delete()
        .eq("id", id)
        .select();

    if (error) throw new Error(error.message);
    if (data.length === 0) {
        const err = new Error("Tarea no encontrada");
        err.status = 404;
        throw err;
    }
}

module.exports = {
    crearTarea,
    obtenerTareas,
    obtenerTareaPorId,
    actualizarTarea,
    eliminarTarea
};