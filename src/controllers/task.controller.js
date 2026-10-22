const taskService = require("../services/task.service");

// Helper: envía el error con su status o 500 por defecto
function handleError(res, err) {
    const status = err.status || 500;
    return res.status(status).json({ error: err.message });
}

// CREATE
async function create(req, res) {
    try {
        const { title } = req.body;
        if (!title || typeof title !== "string" || title.trim() === "") {
            return res.status(400).json({ error: "El título es obligatorio" });
        }

        const tarea = await taskService.crearTarea(title.trim());
        return res.status(201).json({ success: true, data: tarea });
    } catch (err) {
        return handleError(res, err);
    }
}

// READ ALL
async function list(req, res) {
    try {
        const tareas = await taskService.obtenerTareas();
        return res.json({ success: true, count: tareas.length, data: tareas });
    } catch (err) {
        return handleError(res, err);
    }
}

// READ ONE
async function getById(req, res) {
    try {
        const tarea = await taskService.obtenerTareaPorId(req.params.id);
        return res.json({ success: true, data: tarea });
    } catch (err) {
        return handleError(res, err);
    }
}

// UPDATE
async function update(req, res) {
    try {
        const updates = {};
        if (req.body.title !== undefined) updates.title = req.body.title;
        if (req.body.is_complete !== undefined) updates.is_complete = req.body.is_complete;

        if (Object.keys(updates).length === 0) {
            return res.status(400).json({ error: "No se enviaron campos para actualizar" });
        }

        const tarea = await taskService.actualizarTarea(req.params.id, updates);
        return res.json({ success: true, data: tarea });
    } catch (err) {
        return handleError(res, err);
    }
}

// DELETE
async function remove(req, res) {
    try {
        await taskService.eliminarTarea(req.params.id);
        return res.status(204).send();
    } catch (err) {
        return handleError(res, err);
    }
}

module.exports = { create, list, getById, update, remove };