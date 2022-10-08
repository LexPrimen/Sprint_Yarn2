
import 'dotenv/config';
import mongodb, { ObjectId } from 'mongodb';

const MongoClient = mongodb.MongoClient;


export const homeTareas = (req, res) => {
    res.render('index');
};

export const homehome= (req, res) => {
    res.render('home');
};

export const dameTareas = (req, res) => {
  
        MongoClient.connect(process.env.MONGOLOCAL,  (error, db)=>{
            const database =db.db(process.env.DATABASE)
           if (error){
            console.log('error en la conexion');
           } else{
            //  console.log(`Base de Datos Conectada a ${database}`);
             database.collection('tareas').find({}).toArray((error, result) =>{
                if(error){
                    console.log('error conexion');

                }else{
                    res.render('tareas', {result});
                }
    
             })
           }
        });
    }
        
    export const agregarTareas = (req, res) => {
        MongoClient.connect(process.env.MONGOLOCAL,  (error, db)=>{
            const database =db.db(process.env.DATABASE)
           if (error){
            console.log('error en la conexion');
           } else{
            //  console.log(`Base de Datos Conectada a ${database}`);

            const {titulo,autor,descripcion,nivel} = req.body;
            let dia = new Date();
            let fechastring = dia.toLocaleDateString();
             database.collection('tareas').insertOne({titulo,autor,descripcion,nivel,fecha: fechastring}, (error, result) =>{
                if(error){
                    console.log('error conexion');

                }else{
                    console.log('dato guardado' + JSON.stringify(req.body));
                    res.render('home');
                }
    
             })
           }
        });
   
};

export const eliminarTarea = (req, res) => {
    MongoClient.connect(process.env.MONGOLOCAL,  (error, db)=>{
        const database =db.db(process.env.DATABASE)
       if (error){
        console.log('error en la conexion');
       } else{
        const id = req.params.id;
        const ObjetcId = mongodb.ObjectId
    

         database.collection('tareas').deleteOne({_id: ObjectId(id)}, (error, result) =>{
            if(error){
                console.log('error conexion');

            }else{
                console.log('dato eliminado');
                res.json(result);
            }

         })
       }
    });
};


export const TareasId = (req, res) => {
  
    MongoClient.connect(process.env.MONGOLOCAL,  (error, db)=>{
        const database =db.db(process.env.DATABASE)
       if (error){
        console.log('error en la conexion');
       } else{
           const ObjectId = mongodb.ObjectId;
           const id = req.params.id;
         database.collection('tareas').findOne({_id: ObjectId(id)}),((error, result) =>{
            if(error){
                console.log('error conexion');

            }else{
                res.json(result);
            }

         })
       }
    });
}


export const editar = (req, res) => {
   res.render('editarTareas')
 };

 export const indexinicio = (req, res) => {
    res.render('index')
  };
 
 


// export const editarTarea = (req, res) => {
   
// };



//  homeTareas,
//  dameTareas,
//  TareasId,
//  agregarTareas,
//  editarTarea,
//  eliminarTarea