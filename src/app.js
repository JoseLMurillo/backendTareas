const express = require("express");
const cors = require("cors"); 
const app = express();

const PORT = 3000;

app.use(cors());

const allowedOrigins = [
    process.env.CORS_ORIGIN,          // https://tu-proyecto.vercel.app
    "http://localhost:5173"            // desarrollo local
].filter(Boolean);

app.use(cors({
    origin: allowedOrigins,
    credentials: true   // solo si usas cookies
}));




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