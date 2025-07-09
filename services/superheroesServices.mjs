import superHeroRepository from '../repositories/SuperHeroRepository.mjs';

export async function obtenerSuperheroePorId(id){
    return await superHeroRepository.obtenerPorId(id);
}

export async function obtenerTodosLosSuperheroes(){
    return await superHeroRepository.obtenerTodos();
}

export async function buscarSuperheroesPorAtributo(atributo, valor){
    return await superHeroRepository.buscarPorAtributo(atributo, valor);
}

export async function obtenerSuperheroesMayoresDe30(){
    return await superHeroRepository.obtenerMayoresDe30();
}

export function crearInstanciaModelo(body){
    return superHeroRepository.crearInstanciaModelo(body);
}

export async function eliminarSuperHeroeId(id){
    return await superHeroRepository.eliminarPorId(id);
}

export async function eliminarSuperHeroeNombre(nombre){
    return await superHeroRepository.eliminarPorNombre(nombre);
}

export async function actualizarSuperHeroe(id,body){
    return await superHeroRepository.actualizar(id,body);
}