
import { Router } from 'express';
import { 
     homeS, 
    getTareas, 
    getTareaByID,
    formTarea,
    createTareas, 
    updateTareas,
    deleteTareas,
    deletear, 
} from '../controllers/homeController.js'
// from '../controllers/homeControllerAtlas.js'

export const router = Router();

  router.get('/', homeS) 
router.get('/tareas', getTareas);
router.get('/editarTarea/:id', getTareaByID)
router.get('/creartarea', formTarea);
router.post('/AddTareas', createTareas);
router.put('/actualizar/:id', updateTareas);
router.delete('/delete/:id', deleteTareas);
router.get('/borrar/:id', deletear)






