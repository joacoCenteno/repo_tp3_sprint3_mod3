import { obtenerSuperheroePorId, obtenerTodosLosSuperheroes, buscarSuperheroesPorAtributo, obtenerSuperheroesMayoresDe30, crearInstanciaModelo, eliminarSuperHeroeId, eliminarSuperHeroeNombre, actualizarSuperHeroe } from '../services/superheroesServices.mjs';
import {renderizarSuperheroe, renderizarListaSuperheroes} from '../views/responseView.mjs'


export async function obtenerSuperheroePorIdController(req, res){
    try{
        const {id} = req.params;
        const superheroe = await obtenerSuperheroePorId(id);

        if(!superheroe){
            return res.status(404).send({mensaje: 'Superheroe no encontrado'});
        }

        const superheroeFormateado = renderizarSuperheroe(superheroe);
        res.status(200).json(superheroeFormateado);
    }catch(err){
        res.status(500).send({mensaje: 'Error al obtener el superheroe', error: err.message});
    }
}


export async function obtenerTodosLosSuperheroesController(req, res){
    try{
        const superheroes = await obtenerTodosLosSuperheroes();

        const superheroesFormateados = renderizarListaSuperheroes(superheroes);
        res.render('dashboard', { superheroesFormateados, msg: req.query.msg });
    }catch(err){
        res.status(500).send({mensaje: 'Error al obtener los superheroes', error: err.message});
    }
}


export async function buscarSuperheroesPorAtributoController(req, res){
    try{
        const {atributo,valor} = req.params;
        const superheroes = await buscarSuperheroesPorAtributo(atributo,valor);

        if(superheroes.length === 0){
            return res.status(404).send({mensaje: 'No se encontraron superheroes con ese atributo'});
        }

        const superheroesFormateados = renderizarListaSuperheroes(superheroes);
        res.status(200).json(superheroesFormateados);

    }catch(err){
        res.status(500).send({mensaje: 'Error al buscar los superheroes', error: err.message});
    }
}


export async function obtenerSuperheroesMayoresDe30Controller(req, res){
    try{
        const superheroes = await obtenerSuperheroesMayoresDe30();

        if(superheroes.length === 0){
            return res.status(404).send({mensaje: 'No se encontraron superheroes mayores de 30 años'});
        }

        const superheroesFormateados = renderizarListaSuperheroes(superheroes);
        res.status(200).json(superheroesFormateados);
        
    }catch(err){
        res.status(500).send({mensaje: 'Error al obtener superheroees mayores de 30', error: err.message});
    }
}

export async function insertarSuperHeroeController(req, res){
    try{
        const procesarPoder = (poder) => {
            return req.body[poder]
            ? req.body[poder].split('-').map(value => value.trim()).filter(value => value !== '')
            : []
        }


        const new_superhero = crearInstanciaModelo({
            ...req.body,
            poderes: procesarPoder('poderes'),
            aliados: procesarPoder('aliados'),
            enemigos: procesarPoder('enemigos')
        });

        const heroe_guardado = await new_superhero.save();

        res.status(200).redirect('/api/heroes?msg=Heroe insertado con éxito!');
    }catch(err){
        res.status(500).send({mensaje: 'Error al insertar nuevo superheroe'});
    }
}


export async function actualizarSuperHeroeController(req,res){
    try{
        const procesarPoder = (poder) => {
            return req.body[poder]
            ? req.body[poder].split('-').map(value => value.trim()).filter(value => value !== '')
            : []
        }

        const {id} = req.params;
       // const nuevo_superheroe = req.body;
        const heroe_actualizado = await actualizarSuperHeroe(id, {...req.body,
            poderes: procesarPoder('poderes'),
            aliados: procesarPoder('aliados'),
            enemigos: procesarPoder('enemigos')});

        if(!heroe_actualizado){
            return res.status(404).send({mensaje: 'Superheroe no actualizado'});
        }

        res.status(200).redirect('/api/heroes?msg=Heroe actualizado con éxito!');
    }catch(err){
        res.status(500).send({mensaje:'Error al actualizar el superheroe', error: err.message});
    }
}


export async function eliminarSuperHeroeIdController(req,res){
    try{
        const {id} = req.params;
        const superheroe_eliminado = await eliminarSuperHeroeId(id);

        if(!superheroe_eliminado){
            return res.status(404).send({mensaje: 'Superheroe no eliminado'});
        }
        
        res.status(200).redirect('/api/heroes?msg=Heroe eliminado con éxito!');
       // res.status(200).json({mensaje: 'Heroe Elimiado', heroe: superheroe_eliminado});
    }catch(err){
        res.status(500).send({mensaje: 'Error al eliminar el superheroe'});
    }
}

export async function eliminarSuperHeroeNombreController(req,res){
    try{
        const {nombre} = req.params;
        const superheroe_eliminado = await eliminarSuperHeroeNombre(nombre);

        if(!superheroe_eliminado){
            return res.status(404).send({mensaje: 'Superheroe no eliminado'});
        }

        res.status(200).json({mensaje: 'Heroe Elimiado', heroe: superheroe_eliminado});
    }catch(err){
        res.status(500).send({mensaje:'Error al eliminar el superheroe por nombre'});
    }
}