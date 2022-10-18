

const express = require('express');
const path = require('path');
const hbs = require('hbs');

const PORT = process.env.PORT || 8080;
const app = express();
//Middlewares
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));
//Configuraciones
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'views/partials'));
//Rutas
app.get ('/', (req,res) => { 
    res.render('index')
    });
app.get ('/fechas', (req,res) => { 
    res.render('fechas')
     });
 app.get ('/info', (req,res) => { 
    res.render('info')
      });
app.get ('/fotos', (req,res) => {
    res.render('fotos')
     });
//Aplicacion en escucha por el puerto asignado
app.listen(PORT, () => { console.log(`Aplicacion activa y trabajando en puerto ${PORT}`)});
//En caso de error me avisa
app.on('Error', (err) =>{ console.log('Tenemos un error en el Espacio'); })

