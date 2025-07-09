import SuperHero from '../models/SuperHero.mjs';
import IRepository from './IRepository.mjs';

class SuperHeroRepository extends IRepository{
    async obtenerPorId(id_i){
        return await SuperHero.findById(id_i);
    }

    async obtenerTodos(){
        return await SuperHero.find({});
    }

    async buscarPorAtributo(atributo, valor){
        return await SuperHero.find({[atributo]: valor});
    }

    async obtenerMayoresDe30(){
        return await SuperHero.find({edad: { $gt: 30}, planetaOrigen: 'Tierra',  $expr: {$gt:[{$size: "$poderes"},1]}});
    }

    crearInstanciaModelo(body){
        return new SuperHero(body);
    }

    async actualizar(id,body){
        return await SuperHero.findByIdAndUpdate(id,body,{new:true});
    }

    async eliminarPorId(id){
        return await SuperHero.findByIdAndDelete(id);
    }

    async eliminarPorNombre(nombre){
        return await SuperHero.findOneAndDelete({nombreSuperHeroe: nombre});
    }
}

export default new SuperHeroRepository();