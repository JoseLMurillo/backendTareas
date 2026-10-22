const express = require("express");
const cors = require("cors"); 
const app = express();

const PORT = 3000;

app.use(cors());
app.use(express.json());

const usuarioRouter = require("./routes/usuario.routers");
const taskRoutes = require("./routes/task.routers");

app.get("/", (req, res) => {
  res.send("Servidor funcionando en local");
});

app.use("/usuarios", usuarioRouter);
app.use("/tasks", taskRoutes);

app.listen(PORT, () => {
  console.log(`Servidor ejecutandose en http://localhost:${PORT}`);
});