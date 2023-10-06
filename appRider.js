// Contenido de appRider.js (archivo principal)
import express from "express";
import cors from "cors";
import { miRutaAprenInstruc } from "./routes/si.routes.js";
import { miRutaAprendiz } from "./routes/miRutaRider.js";
import { miRutaInstructor } from "./routes/intructores.routes.js";
import { miRutaResultados } from "./routes/resultados.routes.js";
import { miRutasNotas } from "./routes/notas.routes.js";
import miBase from "./bases/miBaseRider.js";

const app = express();
const port = 8000;

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.get('/', (req, res) => {
    res.send("Hoy casi pierdo clase de node");
});

app.use('/aprendices', miRutaAprendiz);
app.use('/instructores', miRutaInstructor);
app.use('/ruta',miRutaAprenInstruc);
app.use('/resultados',miRutaResultados);
app.use('/notas',miRutasNotas);





// Iniciar servidor
app.listen(port, () => {
    console.log(`Conectada http://localhost:${port}/`);
});

// Conectar a la base de datos
try {
    await miBase.authenticate();
    console.log('Conexión exitosa a la base de datos');
} catch (error) {
    console.error('Error de conexión a la base de datos:', error);
}
