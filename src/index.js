const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const {moongoose} = require('./database');

//configuracion
app.set('port', process.env.PORT || 3000);

//midedlewers
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/task',require('./routes/task.routes'));

//static files

app.use(express.static(path.join(__dirname, 'public')))

//starting server
app.listen(app.get('port'),()=>{
    console.log(`Server on port ${app.get('port')}`);
});