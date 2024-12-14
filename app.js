const express = require('express');
const path = require('node:path');
const app = express();
const rutaPrincipal = require('./routes/mainRouter.js');
const rutaUsuarios = require('./routes/authRouter.js');
const boardRouter = require('./routes/boardRouter.js');
const taskRouter = require('./routes/taskRouter.js');
const eventRouter = require('./routes/eventRouter.js');
const { configDotenv } = require('dotenv');
const cors = require('cors');
const connectToMongo = require('./db/config.js');

//Variables de entorno para que funcione
configDotenv();

// Database
connectToMongo();

//CORS para que permita, al front, conectarse
app.use(cors())

//middleware para que node reciba bien los JSON
app.use(express.json());

/* Carpeta public */
const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));


/* Rutas */
app.use('/', rutaPrincipal);
app.use('/pizarras', boardRouter);
app.use('/eventos', eventRouter);
app.use('/auth', rutaUsuarios);
app.use('/tareas', taskRouter);

app.use((req, res) => {
    res.status(404).send('notFound')
});


/* Server */
const port = process.env.PORT; //!Quite el condicional, ya que, le agregue las variables de entorno que ya indican el mismo.
app.listen(port, err =>{
    console.log(err? err : `Servidor Iniciado en http://localhost:${port}`);
});