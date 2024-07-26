// Inicializar una variable que nos inicie el servidor
const { log } = require("console");
const express = require("express");
// Proporcionar la ruta d elos archivos y elementos que utilizaremos en el proyecto
const path = require("path");
// Crear la aplicacion que desplegará el servidor de express (live server)
const app = express();

// Establecer el middleware para servir archivos estaticos desde una carpeta pública
app.use(express.static('public'));

// Establecer la ruta de la página de inicio
app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "index.html"));
});

// Activar las conexiones para desplegar nuestro aplicativo en un puerto
const PORT = process.env.PORT || 4000;
// Listar el servidor para que nos diga que esta funcionando
app.listen(PORT, () => {
    console.log("El servidor esta corriendo en el puerto", PORT)
});