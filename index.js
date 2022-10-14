
import express from 'express';
import 'dotenv/config';
import path from 'path';
import hbs from 'hbs';
import morgan from 'morgan';
import methodOverride from 'method-override';
import { fileURLToPath } from 'url';
import { router } from './src/routes/homeRouter.js';
// import './src/db/conexion.js';

//Definimos la ruto del scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Inicio
const PORT = process.env.PORT || 4000;
const app = express();

//Middelwares
app.use(morgan('common')); // 'dev' - 'combined'
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, '/public')));

//Seteamos hbs
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'src/views'));
hbs.registerPartials(path.join(__dirname, 'src/views/partials'))




//Rutas

 app.use(router);



app.listen(PORT, () => {
    console.log(`Aplicación con Yarn y ES6 corriendo en el Puerto: ${PORT}`);
});









// const conexion = mysql.createConnection({
//     host: process.env.HOST,
//     user: process.env.USER,
//     password: process.env.PASSWORD,
//     database: process.env.DATABASE   
// });






app.get('/', (req, res, next) =>{
    let sql ='SELECT * FROM trabajopp';

     conexion.query(sql, (err, result) => {
     if (err) throw err;
     res.render('index',{
        titulo: 'formulario para productos',
        results: result,
        
    })
});




app.get('/', (req,res) =>{
    
    res.render('index',{
        
        style:'styles.css',
        validacion: 'validacion'
        
        
    });

});


app.get('/home', (req,res) =>{
    
    res.render('home',{
        
        style:'styles.css',
        validacion: 'validacion'
        
        
    });

});




app.get('/tareas', (req,res) =>{
    
    res.render('tareas',{
        
        style:'styles.css',
        validacion: 'validacion'
        
        
    });

});



app.get('/page', (req,res) =>{
    
    res.render('page',{
        
        style:'styles.css',
        validacion: 'validacion'
        
        
    });

});


app.get('/editar', (req,res) =>{
    
    res.render('editar',{
        
        style:'styles.css',
        validacion: 'validacion'
        
        
    });

});

app.get('/editarTarea', (req,res) =>{
    
    res.render('editarTarea',{
        
        style:'styles.css',
        validacion: 'validacion'
        
        
    });

});


// app.get('/', (req,res) =>{
    
     
//     let sql ='SELECT * FROM trabajopp';

//      conexion.query(sql, (err, result) => {
//      if (err) throw err;
//      res.render('index',{
//         titulo: 'formulario para productos',
//         results: result,
//     });
//   });



//  });
// app.get('/', (req,res) =>{
// res.render('index',{
// titulo: 'formulario para productos',
//      });
 });

// app.listen(PORT, () => {
//     console.log(`el servidor esta funcionando en el puerto ${PORT}`)
//  });





 
//  app.post('/page' , (req,res) => {
    
    
   
//      const {producto,precio} = req.body; 
        
//         console.log(producto, precio);
     
//          if (producto =='' || precio == ''){
//             let validacion = 'rellenar los campos necesarios..';
    
//             res.render('page', {
//                 titulo: 'formulario para productos',
//                 validacion
//             });
//          } else{
//             res.render('validacion', {
//                 titulo: 'formulario enviado',
//                 style:'styles.css',
//           }) ;
//          }
    
//         let datos = {
//             producto: producto,     //La primera palabra es el nombre de la base de datos y el siguiente es el valor que tiene en el programa//
//             precio: precio
//         }
         
//           let sql ='INSERT INTO trabajopp set ?';
    
//           conexion.query(sql, datos, (err, result) => {
//             if (err) throw err;
//             return
//           });


         
 
        // res.send(`Datos recibidos: producto: ${producto} precio: ${precio}`); 
       
//  });
     
