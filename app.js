const express = require('express');
const path = require('path');
const app = express();

// Configuración de handlebars
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

const hbs = require('hbs');
hbs.registerPartials(path.join(__dirname, 'views/partials'));

app.set("view options", { layout: "layouts/main" }); // Define el layout principal

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, 'public/css'))); // Ruta explícita para CSS

// Rutas
const routes = require('./routes/index');
app.use('/', routes);

// Servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
