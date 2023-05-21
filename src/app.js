import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import db from "./database/db.js";
import blogRoutes from "./routes/routes.js";
import microservice from "./routes/microservices.routes.js";
import { PORT } from "./config.js"

//Initialize App
const app = express();

//Seetings
app.use(cors());
app.use(express.json());

//! Limites de Datos para la carga de archivos desde Servidor
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', enconding:'utf8', extended: true}));

//Routes
app.use("/budget", blogRoutes);
app.use(microservice); 

//Initialize Database
try {
  await db.authenticate();
  console.log("Conexion exitosa con la base de datos");
} catch (error) {
  console.log(`El error de conexion es: ${error}`);
}

//Listen Port
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
