

import { Router } from "express";
import {
        homeTareas,
        dameTareas, 
        agregarTareas,
        eliminarTarea,
        editar,
        TareasId,
        indexinicio,
        homehome,
        
        // editarTarea,
        

}from '../controllers/tareasControler.js'


 export const router = Router();
 
 
router.get('/', homeTareas);
router.get('/home', homehome);
router.get('/tareas', dameTareas);
router.post('/addTareas', agregarTareas); 
router.delete('/eliminar', eliminarTarea);
 router.get('/tareas/:id', TareasId);
 router.get('/editar', editar);
 router.get('/index',indexinicio);

//  router.put('/editar/id:', editarTarea);



 