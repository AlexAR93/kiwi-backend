
const express = require('express');
const path = require('node:path');
const app = express();
const rutaPrincipal = require('./routes/mainRouter.js');
const rutaUsuarios = require('./routes/authRouter.js');
const rutaTareas = require('./routes/taskRouter.js');


/* Carpeta public */
const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));


/* Rutas */
app.use('/', rutaPrincipal);
app.use('/tareas', rutaTareas);
app.use('/', rutaUsuarios);

app.use((req, res, next) => {
    res.status(404).send('notFound')
});


/* Server */
const PORT = process.env.PORT ?? 5501;
app.listen(PORT, err =>{
    console.log(err? err : `Servidor Iniciado en http://localhost:${PORT}`);
});