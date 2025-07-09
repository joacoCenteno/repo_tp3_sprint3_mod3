import express from 'express';
import{
    obtenerSuperheroePorIdController,
    obtenerTodosLosSuperheroesController,
    buscarSuperheroesPorAtributoController,
    obtenerSuperheroesMayoresDe30Controller,
    insertarSuperHeroeController,
    eliminarSuperHeroeIdController,
    eliminarSuperHeroeNombreController,
    actualizarSuperHeroeController
} from '../controllers/superheroesController.mjs';
import {registerValidationRules} from '../validations/validationRules.mjs';
import {handleValidationErrors} from '../error_middle/errorMiddleware.mjs'

//Borrar
import { obtenerSuperheroePorId} from '../services/superheroesServices.mjs';


const router = express.Router();


router.get('/heroes/editarHeroe/:id', async (req,res)=>{
    const {id} = req.params;
    const heroe =  await obtenerSuperheroePorId(id);
    
    res.render('editSuperhero',{errors:[], hero:heroe});
})


router.get('/heroes/nuevoHeroe',(req,res)=>{
    res.render('addSuperhero', {errors:[], datos:{}});
})

router.get('/heroes', obtenerTodosLosSuperheroesController);
router.get('/heroes/mayoresA30', obtenerSuperheroesMayoresDe30Controller);
router.get('/heroes/:id', obtenerSuperheroePorIdController);
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController);

router.post('/heroes/insertar', registerValidationRules(), handleValidationErrors('addSuperhero'), insertarSuperHeroeController);

router.put('/heroes/actualizar/:id', registerValidationRules(), handleValidationErrors('editSuperhero'), actualizarSuperHeroeController)

router.delete('/heroes/eliminar/id/:id',eliminarSuperHeroeIdController)
router.delete('/heroes/eliminar/nombre/:nombre',eliminarSuperHeroeNombreController);



export default router;